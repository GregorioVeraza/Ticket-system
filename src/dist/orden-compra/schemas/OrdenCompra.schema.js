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
exports.OrdenCompraSchema = exports.OrdenCompra = exports.estados = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const evento_scheme_1 = require("../../evento/schemes/evento.scheme");
var estados;
(function (estados) {
    estados["Pendiente"] = "pending";
    estados["Pagada"] = "approved";
    estados["Cancelada"] = "cancelled";
    estados["EnProceso"] = "in_process";
    estados["Rechazada"] = "rejected";
})(estados || (exports.estados = estados = {}));
let OrdenCompra = class OrdenCompra {
    clienteId;
    eventoId;
    estado;
    preferenceId;
    externalReference;
    total;
    fechaDeCreacion;
};
exports.OrdenCompra = OrdenCompra;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], OrdenCompra.prototype, "clienteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Evento', required: true }),
    __metadata("design:type", evento_scheme_1.Evento)
], OrdenCompra.prototype, "eventoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], OrdenCompra.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], OrdenCompra.prototype, "preferenceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], OrdenCompra.prototype, "externalReference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], OrdenCompra.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], OrdenCompra.prototype, "fechaDeCreacion", void 0);
exports.OrdenCompra = OrdenCompra = __decorate([
    (0, mongoose_1.Schema)()
], OrdenCompra);
exports.OrdenCompraSchema = mongoose_1.SchemaFactory.createForClass(OrdenCompra);
//# sourceMappingURL=OrdenCompra.schema.js.map