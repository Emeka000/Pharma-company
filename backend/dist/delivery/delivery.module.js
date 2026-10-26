var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ChowdeckRelayAdapter } from './couriers/chowdeck-relay.adapter.js';
import { CourierDispatchService } from './courier-dispatch.service.js';
import { CourierBookingController, CourierWebhookController, DeliveryAreasController, PharmacyDeliveryController, RiderController } from './delivery.controller.js';
import { DeliveryService } from './delivery.service.js';
import { CustomerAlertsService } from './customer-alerts.service.js';
import { DeliveryWatchService } from './delivery-watch.service.js';
import { RiderAlertsService } from './rider-alerts.service.js';
let DeliveryModule = class DeliveryModule {
};
DeliveryModule = __decorate([
    Module({
        controllers: [DeliveryAreasController, CourierWebhookController, RiderController, PharmacyDeliveryController, CourierBookingController],
        providers: [DeliveryService, RiderAlertsService, CustomerAlertsService, DeliveryWatchService, ChowdeckRelayAdapter, CourierDispatchService],
        exports: [DeliveryService, RiderAlertsService, CustomerAlertsService, DeliveryWatchService, CourierDispatchService],
    })
], DeliveryModule);
export { DeliveryModule };
//# sourceMappingURL=delivery.module.js.map