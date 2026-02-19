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
exports.CreateEventoDto = void 0;
const create_tipo_entrada_dto_1 = require("../../tipo-entrada/dto/create-tipo-entrada.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateEventoDto {
    nombre;
    fecha;
    descripcion;
    tipoEntrada;
    creadorId;
    imagePublicId;
}
exports.CreateEventoDto = CreateEventoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateEventoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_tipo_entrada_dto_1.CreateTipoEntradaDto }),
    __metadata("design:type", Array)
], CreateEventoDto.prototype, "tipoEntrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "creadorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "imagePublicId", void 0);
//# sourceMappingURL=create-evento.dto.js.map