var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
export const UPLOAD_TYPES = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
};
export function sniff(buf) {
    if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff)
        return 'image/jpeg';
    if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
        return 'image/png';
    if (buf.length >= 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP')
        return 'image/webp';
    if (buf.length >= 5 && buf.toString('ascii', 0, 5) === '%PDF-')
        return 'application/pdf';
    return null;
}
let StorageService = class StorageService {
    root;
    constructor(config) {
        this.root = resolve(config.get('UPLOAD_DIR') ?? './uploads');
    }
    async save(buf, type, folder = 'prescriptions') {
        const key = `${folder}/${randomUUID()}.${UPLOAD_TYPES[type]}`;
        await mkdir(join(this.root, folder), { recursive: true });
        await writeFile(join(this.root, key), buf, { mode: 0o600 });
        return key;
    }
    async read(key, folder = 'prescriptions') {
        if (!new RegExp(`^${folder}/[0-9a-f-]{36}\\.(jpg|png|webp|pdf)$`).test(key))
            throw new Error('Invalid storage key');
        return readFile(join(this.root, key));
    }
};
StorageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map