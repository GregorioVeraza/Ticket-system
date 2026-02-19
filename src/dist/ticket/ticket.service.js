"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ticket_schema_1 = require("./schemas/ticket.schema");
const mongoose_2 = require("mongoose");
const cliente_service_1 = require("../cliente/cliente.service");
const nodemailer_1 = require("nodemailer");
const QRCode = __importStar(require("qrcode"));
let TicketService = class TicketService {
    ticketModel;
    clienteService;
    constructor(ticketModel, clienteService) {
        this.ticketModel = ticketModel;
        this.clienteService = clienteService;
    }
    async enviarMailConQR(mail, codigoPublico) {
        const testAccount = await (0, nodemailer_1.createTestAccount)();
        const transporter = (0, nodemailer_1.createTransport)({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
        const qrBuffer = await QRCode.toBuffer(codigoPublico);
        (async () => {
            const info = await transporter.sendMail({
                from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
                to: mail,
                subject: "Entradas compradas - QR Code",
                text: `Gracias por su compra. Su código de entrada es: ${codigoPublico}`,
                html: `
          <h1>Gracias por su compra.</h1>
          <p>Mostrá este QR al staff:</p>
          <img src="cid:qr-code" />
        `,
                attachments: [
                    {
                        filename: 'qrcode.png',
                        content: qrBuffer,
                        cid: 'qr-code'
                    }
                ]
            });
            console.log("Message sent:", info.messageId);
            const previewUrl = (0, nodemailer_1.getTestMessageUrl)(info);
            console.log("Preview URL: %s", previewUrl);
        })();
    }
    create(createTicketDto) {
        const ticketConCodigo = {
            ...createTicketDto,
            codigoPublico: crypto.randomUUID(),
        };
        const ticket = new this.ticketModel(ticketConCodigo);
        return ticket.save().then(async (result) => {
            const email = await this.clienteService.findOneById(createTicketDto.compradorId).then((cliente) => {
                return cliente;
            });
            this.enviarMailConQR(email, ticket.codigoPublico);
            return result.id;
        });
    }
    async findOne(id) {
        return this.ticketModel.findOne({ id }).populate('eventoId').populate('tipoEntradaId').exec();
    }
    async findOneByUuid(uuid) {
        return this.ticketModel.findOne({ codigoPublico: uuid }).populate('eventoId').populate('tipoEntradaId').exec();
    }
    async validarTicket(idTicket) {
        console.log(`Validando ticket ${idTicket}...`);
        try {
            const ticket = await this.findOneByUuid(idTicket);
            if (!ticket) {
                throw new Error(`Ticket ${idTicket} no encontrado`);
            }
            const hoy = new Date();
            const fechaEvento = new Date(ticket.eventoId.fecha);
            const esHoy = hoy.getUTCFullYear() === fechaEvento.getUTCFullYear() &&
                hoy.getUTCMonth() === fechaEvento.getUTCMonth() &&
                hoy.getUTCDate() === fechaEvento.getUTCDate();
            if (!esHoy) {
                throw new Error(`Ticket ${idTicket} no válido: fecha del evento no coincide`);
            }
            if (!ticket.estado) {
                throw new Error(`Ticket ${idTicket} ya fue usado`);
            }
            ticket.estado = false;
            await ticket.save();
            console.log(`Ticket ${idTicket} validado correctamente`);
            return {
                message: `Ticket ${idTicket} validado correctamente`,
                isValid: true,
            };
        }
        catch (error) {
            console.log(error.message);
            return {
                message: `Error al validar ticket ${idTicket}: ${error.message}`,
                isValid: false,
            };
        }
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticket_schema_1.Ticket.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, cliente_service_1.ClienteService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map