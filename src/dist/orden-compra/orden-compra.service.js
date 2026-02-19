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
exports.OrdenCompraService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ticket_schema_1 = require("../ticket/schemas/ticket.schema");
const cliente_service_1 = require("../cliente/cliente.service");
const ticket_service_1 = require("../ticket/ticket.service");
const OrdenCompra_schema_1 = require("./schemas/OrdenCompra.schema");
let OrdenCompraService = class OrdenCompraService {
    ordenCompraModel;
    ticketService;
    clienteService;
    constructor(ordenCompraModel, ticketService, clienteService) {
        this.ordenCompraModel = ordenCompraModel;
        this.ticketService = ticketService;
        this.clienteService = clienteService;
    }
    create(createOrdenCompraDto) {
        console.log(createOrdenCompraDto);
        const ordenCompleta = { ...createOrdenCompraDto, fechaDeCreacion: new Date() };
        const orden = new this.ordenCompraModel(ordenCompleta);
        return orden.save().then((result) => {
            return result.id;
        });
    }
    updatePreferenceId(id, preferenceId) {
        return this.ordenCompraModel.findByIdAndUpdate(id, { preferenceId: preferenceId }, { new: true }).exec().then((updatedOrden) => {
            if (!updatedOrden) {
                throw new Error('Orden de compra no encontrada');
            }
            return updatedOrden;
        });
    }
    async crearTicket(createTicketDTo) {
        return this.ticketService.create(createTicketDTo);
    }
    async updateEstado(nuevoEstado, idOrdenCompra) {
        return this.ordenCompraModel.findByIdAndUpdate(idOrdenCompra, { estado: nuevoEstado }, { new: true }).exec().then(async (updatedOrden) => {
            if (!updatedOrden) {
                throw new Error('Orden de compra no encontrada');
            }
            if (nuevoEstado === 'approved') {
                try {
                    const cliente = await this.clienteService.findByAuth0Sub(updatedOrden.clienteId);
                    const createTicketDTO = {
                        eventoId: updatedOrden.eventoId,
                        tipoEntradaId: ticket_schema_1.TipoEntrada.VIP,
                        compradorId: cliente._id,
                        OrdenCompraId: updatedOrden._id,
                        estado: true,
                    };
                    const idTicket = await this.crearTicket(createTicketDTO);
                    this.clienteService.addTicket(cliente._id, idTicket);
                }
                catch (err) {
                    console.error('Error creating ticket for approved order:', err);
                }
            }
            return updatedOrden;
        }).catch((error) => {
            throw new Error(`Error updating orden de compra: ${error.message}`);
        });
    }
    findAll() {
        return `This action returns all ordenCompra`;
    }
    findOne(id) {
        return `This action returns a #${id} ordenCompra`;
    }
    update(id, updateOrdenCompraDto) {
        return `This action updates a #${id} ordenCompra`;
    }
    remove(id) {
        return `This action removes a #${id} ordenCompra`;
    }
};
exports.OrdenCompraService = OrdenCompraService;
exports.OrdenCompraService = OrdenCompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(OrdenCompra_schema_1.OrdenCompra.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, ticket_service_1.TicketService, cliente_service_1.ClienteService])
], OrdenCompraService);
//# sourceMappingURL=orden-compra.service.js.map