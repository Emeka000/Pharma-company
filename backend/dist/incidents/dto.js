var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Length } from 'class-validator';
import { IncidentType } from '../generated/prisma/client.js';
export class ReportIncidentDto {
    type;
    description;
}
__decorate([
    ApiProperty({ enum: IncidentType }),
    IsEnum(IncidentType),
    __metadata("design:type", String)
], ReportIncidentDto.prototype, "type", void 0);
__decorate([
    ApiProperty({ example: 'Seal was broken when the parcel was handed over' }),
    IsString(),
    Length(5, 500),
    __metadata("design:type", String)
], ReportIncidentDto.prototype, "description", void 0);
export class ResolveIncidentDto {
    resolution;
}
__decorate([
    ApiProperty({ example: 'Pharmacist inspected the return; stock written off; customer refunded' }),
    IsString(),
    Length(5, 500),
    __metadata("design:type", String)
], ResolveIncidentDto.prototype, "resolution", void 0);
//# sourceMappingURL=dto.js.map