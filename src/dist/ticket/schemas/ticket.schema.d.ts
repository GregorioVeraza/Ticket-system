import { Document, Types } from 'mongoose';
import { Evento } from '../../evento/schemes/evento.scheme';
import { cliente } from '../../cliente/schemas/cliente.schema';
import { OrdenCompra } from '../../orden-compra/schemas/OrdenCompra.schema';
export type TicketDocument = Ticket & Document;
export declare enum TipoEntrada {
    VIP = "VIP",
    GENERAL = "GENERAL",
    BALCON = "BALCON",
    PLATEA = "PLATEA",
    PALCO = "PALCO",
    OTRO = "OTRO"
}
export declare class Ticket {
    eventoId: Evento;
    tipoEntradaId: TipoEntrada;
    compradorId: cliente;
    OrdenCompraId: OrdenCompra;
    estado: boolean;
    codigoPublico: string;
}
export declare const TicketSchema: import("mongoose").Schema<Ticket, import("mongoose").Model<Ticket, any, any, any, Document<unknown, any, Ticket, any, {}> & Ticket & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ticket, Document<unknown, {}, import("mongoose").FlatRecord<Ticket>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Ticket> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
