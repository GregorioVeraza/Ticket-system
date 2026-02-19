import { Document, Types } from 'mongoose';
import { TipoEntrada } from '../../tipo-entrada/schemas/tipo-entrada.schema';
export type EventoDocument = Evento & Document;
export declare class Evento {
    nombre: string;
    fecha: Date;
    descripcion: string;
    tipoEntrada: TipoEntrada[];
    creadorId: string;
    imagePublicId: string;
}
export declare const EventoSchema: import("mongoose").Schema<Evento, import("mongoose").Model<Evento, any, any, any, Document<unknown, any, Evento, any, {}> & Evento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Evento, Document<unknown, {}, import("mongoose").FlatRecord<Evento>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Evento> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
