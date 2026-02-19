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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventoController = void 0;
const common_1 = require("@nestjs/common");
const create_evento_dto_1 = require("./dto/create-evento.dto");
const evento_service_1 = require("./evento.service");
const return_evento_dto_1 = require("./dto/return-evento.dto");
const update_tipo_entrada_evento_1 = require("./dto/update-tipo-entrada-evento");
const swagger_1 = require("@nestjs/swagger");
const return_tipo_entrada_dto_1 = require("../tipo-entrada/dto/return-tipo-entrada.dto");
const passport_1 = require("@nestjs/passport");
const swagger_2 = require("@nestjs/swagger");
let eventoController = class eventoController {
    eventoServices;
    constructor(eventoServices) {
        this.eventoServices = eventoServices;
    }
    create(CreateEventoDto) {
        return this.eventoServices.create(CreateEventoDto);
    }
    findAll() {
        return this.eventoServices.findAll();
    }
    findOne(nombre) {
        return this
            .eventoServices
            .findByName(nombre)
            .then(evento => {
            if (!evento) {
                return null;
            }
            else {
                return evento.tipoEntrada;
            }
        });
    }
    update(update) {
        return this.eventoServices.update(update);
    }
    remove(id) {
        return this.eventoServices.remove(id);
    }
};
exports.eventoController = eventoController;
__decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto]),
    __metadata("design:returntype", void 0)
], eventoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: [return_evento_dto_1.returnEventoDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], eventoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nombre'),
    (0, swagger_1.ApiOkResponse)({ type: [return_tipo_entrada_dto_1.ReturnTipoEntrada] }),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], eventoController.prototype, "findOne", null);
__decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tipo_entrada_evento_1.updateTipoEntradaDto]),
    __metadata("design:returntype", void 0)
], eventoController.prototype, "update", null);
__decorate([
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], eventoController.prototype, "remove", null);
exports.eventoController = eventoController = __decorate([
    (0, common_1.Controller)('evento'),
    __metadata("design:paramtypes", [evento_service_1.EventoService])
], eventoController);
//# sourceMappingURL=evento.controller.js.map