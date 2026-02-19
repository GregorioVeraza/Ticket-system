import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { Model } from 'mongoose';
import { ClienteService } from '../cliente/cliente.service';
export declare class TicketService {
    private ticketModel;
    private clienteService;
    constructor(ticketModel: Model<TicketDocument>, clienteService: ClienteService);
    private enviarMailConQR;
    create(createTicketDto: CreateTicketDto): Promise<string>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, TicketDocument, {}, {}> & Ticket & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findOneByUuid(uuid: string): Promise<(import("mongoose").Document<unknown, {}, TicketDocument, {}, {}> & Ticket & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    validarTicket(idTicket: string): Promise<{
        message: string;
        isValid: boolean;
    }>;
}
