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
exports.EventoSchema = exports.Evento = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Evento = class Evento {
    nombre;
    fecha;
    descripcion;
    tipoEntrada;
    creadorId;
    imagePublicId;
};
exports.Evento = Evento;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Evento.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Evento.prototype, "fecha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Evento.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{
                nombre: { type: String, required: true },
                precio: { type: Number, required: true },
                cantidadEntradas: { type: Number, required: true },
            },
        ],
        required: true
    }),
    __metadata("design:type", Array)
], Evento.prototype, "tipoEntrada", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Evento.prototype, "creadorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Evento.prototype, "imagePublicId", void 0);
exports.Evento = Evento = __decorate([
    (0, mongoose_1.Schema)()
], Evento);
exports.EventoSchema = mongoose_1.SchemaFactory.createForClass(Evento);
//# sourceMappingURL=evento.scheme.js.map