"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnEventoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_tipo_entrada_dto_1 = require("../../tipo-entrada/dto/create-tipo-entrada.dto");
class returnEventoDto {
    id;
    nombre;
    fecha;
    descripcion;
    tipoEntrada;
    creadorId;
    imagePublicId;
}
exports.returnEventoDto = returnEventoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], returnEventoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], returnEventoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], returnEventoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], returnEventoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_tipo_entrada_dto_1.CreateTipoEntradaDto] }),
    __metadata("design:type", Array)
], returnEventoDto.prototype, "tipoEntrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], returnEventoDto.prototype, "creadorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], returnEventoDto.prototype, "imagePublicId", void 0);
//# sourceMappingURL=return-evento.dto.js.map