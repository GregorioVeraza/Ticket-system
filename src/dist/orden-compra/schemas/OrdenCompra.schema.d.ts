import { Document, Types } from 'mongoose';
import { Evento } from '../../evento/schemes/evento.scheme';
export type OrdenCompraDocument = OrdenCompra & Document;
export declare enum estados {
    Pendiente = "pending",
    Pagada = "approved",
    Cancelada = "cancelled",
    EnProceso = "in_process",
    Rechazada = "rejected"
}
export declare class OrdenCompra {
    clienteId: string;
    eventoId: Evento;
    estado: estados;
    preferenceId: string;
    externalReference: string;
    total: number;
    fechaDeCreacion: Date;
}
export declare const OrdenCompraSchema: import("mongoose").Schema<OrdenCompra, import("mongoose").Model<OrdenCompra, any, any, any, Document<unknown, any, OrdenCompra, any, {}> & OrdenCompra & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrdenCompra, Document<unknown, {}, import("mongoose").FlatRecord<OrdenCompra>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrdenCompra> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
