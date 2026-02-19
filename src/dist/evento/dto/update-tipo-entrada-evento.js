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
exports.updateTipoEntradaDto = void 0;
const update_tipo_entrada_dto_1 = require("../../tipo-entrada/dto/update-tipo-entrada.dto");
const swagger_1 = require("@nestjs/swagger");
class updateTipoEntradaDto {
    _id;
    nombre;
    descripcion;
    fecha;
    tipoEntrada;
}
exports.updateTipoEntradaDto = updateTipoEntradaDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], updateTipoEntradaDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], updateTipoEntradaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], updateTipoEntradaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], updateTipoEntradaDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: update_tipo_entrada_dto_1.UpdateTipoEntradaDto }),
    __metadata("design:type", update_tipo_entrada_dto_1.UpdateTipoEntradaDto)
], updateTipoEntradaDto.prototype, "tipoEntrada", void 0);
//# sourceMappingURL=update-tipo-entrada-evento.js.map