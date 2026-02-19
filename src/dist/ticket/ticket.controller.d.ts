import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<string>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/ticket.schema").TicketDocument, {}, {}> & import("./schemas/ticket.schema").Ticket & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findOneByUuid(uuid: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/ticket.schema").TicketDocument, {}, {}> & import("./schemas/ticket.schema").Ticket & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    validarTicket(uuid: string): Promise<{
        message: string;
        isValid: boolean;
    }>;
}
