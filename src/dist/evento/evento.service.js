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
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const evento_scheme_1 = require("./schemes/evento.scheme");
let EventoService = class EventoService {
    eventoModel;
    constructor(eventoModel) {
        this.eventoModel = eventoModel;
    }
    async create(createeventoDto) {
        const evento = new this.eventoModel(createeventoDto);
        return evento.save();
    }
    async findAll() {
        return this.eventoModel.find().exec();
    }
    async findByName(nombre) {
        return this.eventoModel.findOne({ nombre }).populate('tipoEntrada').exec();
    }
    async update(update) {
        const evento = await this.eventoModel.findOne({ _id: update._id });
        if (!evento) {
            return 'evento no encontrado';
        }
        if (update.nombre)
            evento.nombre = update.nombre;
        if (update.fecha)
            evento.fecha = update.fecha;
        if (update.descripcion)
            evento.descripcion = update.descripcion;
        if (update.tipoEntrada && Array.isArray(update.tipoEntrada)) {
            for (const newTipo of update.tipoEntrada) {
                if (newTipo.nombre != '') {
                    if (!evento.tipoEntrada.some(t => t.nombre === newTipo.nombre)) {
                        evento.tipoEntrada.push(newTipo);
                    }
                }
            }
        }
        console.log(evento);
        await evento.save();
        return update;
    }
    async remove(id) {
        console.log('ID recibido para eliminar:', id);
        const result = await this.eventoModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            return 'Evento no encontrado';
        }
        return 'Evento eliminado correctamente';
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(evento_scheme_1.Evento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventoService);
//# sourceMappingURL=evento.service.js.map