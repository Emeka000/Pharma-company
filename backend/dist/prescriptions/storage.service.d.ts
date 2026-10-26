import { ConfigService } from '@nestjs/config';
export declare const UPLOAD_TYPES: {
    readonly 'image/jpeg': "jpg";
    readonly 'image/png': "png";
    readonly 'image/webp': "webp";
    readonly 'application/pdf': "pdf";
};
export type UploadType = keyof typeof UPLOAD_TYPES;
export type StorageFolder = 'prescriptions' | 'compliance';
export declare function sniff(buf: Buffer): UploadType | null;
export declare class StorageService {
    private readonly root;
    constructor(config: ConfigService);
    save(buf: Buffer, type: UploadType, folder?: StorageFolder): Promise<string>;
    read(key: string, folder?: StorageFolder): Promise<Buffer>;
}
