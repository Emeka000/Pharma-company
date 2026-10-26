var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PaymentsService_1;
import { ConflictException, Injectable, Logger, NotFoundException, ServiceUnavailableException, UnprocessableEntityException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'node:crypto';
import { AuditService } from '../audit/audit.service.js';
import { isUniqueViolation } from '../common/codes.js';
import { isDevMode } from '../common/dev-mode.js';
import { OrderStatus, PaymentStatus } from '../generated/prisma/client.js';
import { patientOrderInclude, present } from '../orders/present.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { chargeProblem, orderCodeFromTxRef } from './charge.js';
import { FlutterwaveService } from './flutterwave.service.js';
const CLOSED = [OrderStatus.CANCELLED, OrderStatus.REJECTED];
let PaymentsService = PaymentsService_1 = class PaymentsService {
    prisma;
    audit;
    flutterwave;
    config;
    log = new Logger(PaymentsService_1.name);
    constructor(prisma, audit, flutterwave, config) {
        this.prisma = prisma;
        this.audit = audit;
        this.flutterwave = flutterwave;
        this.config = config;
    }
    get demo() {
        return !this.flutterwave.configured && isDevMode(this.config);
    }
    async payableOrder(user, code) {
        const order = await this.prisma.order.findFirst({ where: { code, patientId: user.id } });
        if (!order)
            throw new NotFoundException('Order not found');
        if (order.paymentStatus !== PaymentStatus.UNPAID)
            throw new ConflictException('This order is already paid');
        if (order.status === OrderStatus.PHARMACIST_REVIEW)
            throw new ConflictException('You can pay once a pharmacist has approved your prescription');
        if (order.status !== OrderStatus.ACCEPTED)
            throw new ConflictException('This order can no longer be paid for');
        return order;
    }
    async start(user, code, dto) {
        const order = await this.payableOrder(user, code);
        const amount = order.totalKobo / 100;
        if (this.demo)
            return { provider: 'demo', code, amount, currency: 'NGN' };
        if (!this.flutterwave.configured)
            throw new ServiceUnavailableException('Online payment isn’t available yet — please try again later');
        const patient = await this.prisma.user.findUniqueOrThrow({ where: { id: user.id } });
        const email = patient.email ?? dto.email?.toLowerCase();
        if (!email)
            throw new UnprocessableEntityException('Add an email address for your payment receipt');
        if (!patient.email && !(await this.prisma.user.findUnique({ where: { email }, select: { id: true } }))) {
            await this.prisma.user.update({ where: { id: user.id }, data: { email } }).catch((e) => {
                if (!isUniqueViolation(e))
                    throw e;
            });
        }
        return {
            provider: 'flutterwave',
            code,
            publicKey: this.flutterwave.publicKey,
            txRef: `${code}-${randomBytes(4).toString('hex')}`,
            amount,
            currency: 'NGN',
            paymentOptions: 'card,banktransfer,ussd',
            customer: {
                email,
                name: [patient.firstName, patient.lastName].filter(Boolean).join(' '),
                ...(patient.phone ? { phone_number: patient.phone } : {}),
            },
        };
    }
    async confirm(user, code, transactionId) {
        const order = await this.prisma.order.findFirst({ where: { code, patientId: user.id } });
        if (!order)
            throw new NotFoundException('Order not found');
        if (order.paymentStatus === PaymentStatus.UNPAID) {
            if (!this.flutterwave.configured)
                throw new ServiceUnavailableException('Online payment isn’t available yet');
            const tx = await this.flutterwave.verify(transactionId);
            const problem = chargeProblem(tx, order);
            if (problem) {
                this.log.warn(`Payment ${transactionId} rejected for ${order.code}: ${problem}`);
                throw new UnprocessableEntityException('That payment didn’t go through for this order — you haven’t been charged for it here');
            }
            await this.markPaid(order, String(tx.id), user.id);
        }
        return this.orderView(order.id);
    }
    async confirmDemo(user, code) {
        if (!this.demo)
            throw new NotFoundException();
        const order = await this.payableOrder(user, code);
        await this.markPaid(order, `demo-${randomBytes(6).toString('hex')}`, user.id);
        return this.orderView(order.id);
    }
    async webhook(hash, body) {
        if (!this.flutterwave.webhookAuthentic(hash))
            throw new NotFoundException();
        const { event, data } = (body ?? {});
        if (event !== 'charge.completed' || typeof data?.id !== 'number' || typeof data.tx_ref !== 'string')
            return { received: true };
        const code = orderCodeFromTxRef(data.tx_ref);
        const order = code ? await this.prisma.order.findUnique({ where: { code } }) : null;
        if (!order || order.paymentStatus !== PaymentStatus.UNPAID)
            return { received: true };
        const tx = await this.flutterwave.verify(data.id);
        const problem = chargeProblem(tx, order);
        if (problem)
            this.log.warn(`Webhook payment ${data.id} ignored for ${order.code}: ${problem}`);
        else
            await this.markPaid(order, String(tx.id), null);
        return { received: true };
    }
    async markPaid(order, txId, actorId) {
        try {
            await this.prisma.$transaction(async (tx) => {
                const data = { paidAt: new Date(), paymentTxId: txId };
                let outcome = PaymentStatus.PAID;
                const paid = await tx.order.updateMany({
                    where: { id: order.id, paymentStatus: PaymentStatus.UNPAID, status: { notIn: CLOSED } },
                    data: { ...data, paymentStatus: PaymentStatus.PAID },
                });
                if (paid.count === 0) {
                    outcome = PaymentStatus.REFUND_DUE;
                    const late = await tx.order.updateMany({ where: { id: order.id, paymentStatus: PaymentStatus.UNPAID }, data: { ...data, paymentStatus: PaymentStatus.REFUND_DUE } });
                    if (late.count === 0)
                        return;
                }
                await this.audit.record({ actorId, action: 'order.paid', entityType: 'Order', entityId: order.id, metadata: { txId, outcome } }, tx);
            });
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('This payment has already been used for another order');
            throw e;
        }
    }
    async orderView(id) {
        return present(await this.prisma.order.findUniqueOrThrow({ where: { id }, include: patientOrderInclude }));
    }
};
PaymentsService = PaymentsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AuditService,
        FlutterwaveService,
        ConfigService])
], PaymentsService);
export { PaymentsService };
//# sourceMappingURL=payments.service.js.map