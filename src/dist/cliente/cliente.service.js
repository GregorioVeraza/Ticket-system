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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cliente_schema_1 = require("./schemas/cliente.schema");
const mongoose_2 = require("mongoose");
function convertirTicket(ticket) {
    return ticket.map((ticket) => ({
        id: ticket._id.toString(),
        evento: {
            nombre: ticket.eventoId?.nombre,
            fecha: ticket.eventoId?.fecha,
        },
        entrada: {
            nombre: ticket.tipoEntradaId?.nombre,
            precio: ticket.tipoEntradaId?.precio,
        },
        Usado: ticket.Usado,
    }));
}
let ClienteService = class ClienteService {
    clienteModel;
    constructor(clienteModel) {
        this.clienteModel = clienteModel;
    }
    create(createClienteDto) {
        const cliente = new this.clienteModel(createClienteDto);
        return cliente.save();
    }
    async findOneById(id) {
        const cliente = await this.clienteModel.findOne({ _id: id }).exec();
        if (!cliente) {
            throw new Error(`Cliente con id ${id} no encontrado`);
        }
        return cliente.email;
    }
    async findOne(id) {
        const cliente = await this.clienteModel
            .findOne({ _id: id })
            .select('tickets')
            .populate({
            path: 'tickets',
            select: 'eventoId tipoEntradaId Usado',
            populate: [
                { path: 'eventoId', select: 'nombre fecha' },
                { path: 'tipoEntradaId', select: 'nombre precio' },
            ],
        })
            .exec();
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return {
            tickets: convertirTicket(cliente.tickets),
        };
    }
    async findByAuth0Sub(auth0Sub) {
        const cliente = await this.clienteModel.findOne({ auth0Sub }).exec();
        if (!cliente) {
            throw new Error(`Cliente con auth0Sub ${auth0Sub} no encontrado`);
        }
        return cliente;
    }
    update(id, updateClienteDto) {
        return `This action updates a #${id} cliente`;
    }
    addTicket(idCliente, idTicket) {
        this.clienteModel.findByIdAndUpdate(idCliente, { $push: { tickets: idTicket } }, { new: true }).exec();
    }
    remove(id) {
        return `This action removes a #${id} cliente`;
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cliente_schema_1.cliente.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map