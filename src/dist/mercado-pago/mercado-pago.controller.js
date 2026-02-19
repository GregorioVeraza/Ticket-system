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
exports.MercadoPagoController = void 0;
const common_1 = require("@nestjs/common");
const mercado_pago_service_1 = require("./mercado-pago.service");
const create_mercado_pago_dto_1 = require("./dto/create-mercado-pago.dto");
const passport_1 = require("@nestjs/passport");
let MercadoPagoController = class MercadoPagoController {
    mercadoPagoService;
    constructor(mercadoPagoService) {
        this.mercadoPagoService = mercadoPagoService;
    }
    async createPreference(req, CreateMercadoPagoDto) {
        const auth0Sub = req.user.sub;
        const initPoint = await this.mercadoPagoService.createPreference(CreateMercadoPagoDto, auth0Sub);
        return { initPoint };
    }
    async recibirNotificacion(body) {
        console.log('Webhook MP:', body);
        await this.mercadoPagoService.recibirNotificacion(body);
        return { status: 'ok' };
    }
};
exports.MercadoPagoController = MercadoPagoController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('preference'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mercado_pago_dto_1.CreateMercadoPagoDto]),
    __metadata("design:returntype", Promise)
], MercadoPagoController.prototype, "createPreference", null);
__decorate([
    (0, common_1.Post)('notifications'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MercadoPagoController.prototype, "recibirNotificacion", null);
exports.MercadoPagoController = MercadoPagoController = __decorate([
    (0, common_1.Controller)('mercado-pago'),
    __metadata("design:paramtypes", [mercado_pago_service_1.MercadoPagoService])
], MercadoPagoController);
//# sourceMappingURL=mercado-pago.controller.js.map