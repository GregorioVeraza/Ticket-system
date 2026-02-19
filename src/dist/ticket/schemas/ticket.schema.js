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
exports.TicketSchema = exports.Ticket = exports.TipoEntrada = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const evento_scheme_1 = require("../../evento/schemes/evento.scheme");
const cliente_schema_1 = require("../../cliente/schemas/cliente.schema");
const OrdenCompra_schema_1 = require("../../orden-compra/schemas/OrdenCompra.schema");
var TipoEntrada;
(function (TipoEntrada) {
    TipoEntrada["VIP"] = "VIP";
    TipoEntrada["GENERAL"] = "GENERAL";
    TipoEntrada["BALCON"] = "BALCON";
    TipoEntrada["PLATEA"] = "PLATEA";
    TipoEntrada["PALCO"] = "PALCO";
    TipoEntrada["OTRO"] = "OTRO";
})(TipoEntrada || (exports.TipoEntrada = TipoEntrada = {}));
let Ticket = class Ticket {
    eventoId;
    tipoEntradaId;
    compradorId;
    OrdenCompraId;
    estado;
    codigoPublico;
};
exports.Ticket = Ticket;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Evento', required: true }),
    __metadata("design:type", evento_scheme_1.Evento)
], Ticket.prototype, "eventoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ticket.prototype, "tipoEntradaId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Cliente', required: true }),
    __metadata("design:type", cliente_schema_1.cliente)
], Ticket.prototype, "compradorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'OrdenCompra', required: true }),
    __metadata("design:type", OrdenCompra_schema_1.OrdenCompra)
], Ticket.prototype, "OrdenCompraId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Ticket.prototype, "codigoPublico", void 0);
exports.Ticket = Ticket = __decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);
//# sourceMappingURL=ticket.schema.js.map