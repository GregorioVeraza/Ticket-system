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
exports.ClienteSchema = exports.cliente = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let cliente = class cliente {
    email;
    password;
    auth0Sub;
    tickets;
    rol;
};
exports.cliente = cliente;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], cliente.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], cliente.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, sparse: true }),
    __metadata("design:type", String)
], cliente.prototype, "auth0Sub", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'TipoEntrada' }], required: false }),
    __metadata("design:type", Array)
], cliente.prototype, "tickets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], cliente.prototype, "rol", void 0);
exports.cliente = cliente = __decorate([
    (0, mongoose_1.Schema)()
], cliente);
exports.ClienteSchema = mongoose_1.SchemaFactory.createForClass(cliente);
//# sourceMappingURL=cliente.schema.js.map