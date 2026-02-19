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
exports.MercadoPagoService = void 0;
const common_1 = require("@nestjs/common");
const mercadopago_1 = require("mercadopago");
const orden_compra_service_1 = require("../orden-compra/orden-compra.service");
let MercadoPagoService = class MercadoPagoService {
    ordenCompraService;
    client = new mercadopago_1.MercadoPagoConfig({ accessToken: 'APP_USR-8689660892447475-121517-79f4e190b043205dcb21d941a9640857-3069409488' });
    paymentClient = new mercadopago_1.Payment(this.client);
    constructor(ordenCompraService) {
        this.ordenCompraService = ordenCompraService;
    }
    async createPreference(createeventoDto, auth0Sub) {
        const preference = new mercadopago_1.Preference(this.client);
        console.log(createeventoDto);
        try {
            if (!createeventoDto || !Array.isArray(createeventoDto.items)) {
                throw new common_1.BadRequestException('`items` must be a non-empty array');
            }
            if (createeventoDto.items.length === 0) {
                throw new common_1.BadRequestException('`items` must contain at least one entry');
            }
            const createOrdenCompraDto = {
                clienteId: auth0Sub,
                eventoId: createeventoDto.eventoId,
                estado: 'in_process',
                total: createeventoDto.items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0),
            };
            const ordenCompraId = await this.ordenCompraService.create(createOrdenCompraDto);
            const data = await preference.create({
                body: {
                    items: createeventoDto.items.map((entrada, index) => ({
                        id: `${index + 1}`,
                        title: entrada.title,
                        quantity: entrada.quantity,
                        unit_price: entrada.unit_price,
                    })),
                    back_urls: {
                        success: 'https://unstack-letty-lovably.ngrok-free.dev/pago-exitoso',
                        failure: 'https://unstack-letty-lovably.ngrok-free.dev/pago-fallido',
                        pending: 'https://unstack-letty-lovably.ngrok-free.dev/pago-pendiente',
                    },
                    notification_url: process.env.MP_WEBHOOK_URL || 'https://unstack-letty-lovably.ngrok-free.dev/mercado-pago/notifications',
                    external_reference: ordenCompraId,
                },
            });
            console.log(data);
            this.ordenCompraService.updatePreferenceId(ordenCompraId, data.id);
            return {
                init_point: data.init_point,
                id: data.id
            };
        }
        catch (err) {
            throw err;
        }
    }
    async recibirPayment(paymentId) {
        return await this.paymentClient.get({ id: paymentId });
    }
    async recibirNotificacion(body) {
        try {
            if (!body || !body.data || !body.data.id) {
                console.warn('Invalid notification payload:', body);
                return;
            }
            const paymentId = body.data.id;
            const payment = await this.recibirPayment(paymentId);
            const paymentData = payment;
            const externalRef = paymentData?.external_reference;
            const status = paymentData?.status;
            console.log('Notificación recibida:', body);
            console.log('Payment ID:', paymentId, 'External Reference:', externalRef, 'Status:', status);
            if (!externalRef) {
                console.warn('No external_reference found in payment:', paymentData);
                return;
            }
            if (!status) {
                console.warn('No status found in payment:', paymentData);
                return;
            }
            await this.ordenCompraService.updateEstado(status, externalRef);
        }
        catch (err) {
            console.error('Error processing notification:', err);
            throw err;
        }
    }
};
exports.MercadoPagoService = MercadoPagoService;
exports.MercadoPagoService = MercadoPagoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orden_compra_service_1.OrdenCompraService])
], MercadoPagoService);
//# sourceMappingURL=mercado-pago.service.js.map