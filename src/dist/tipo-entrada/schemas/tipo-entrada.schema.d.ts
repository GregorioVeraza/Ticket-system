import { Document } from 'mongoose';
export type TipoEntradaDocument = TipoEntrada & Document;
export declare class TipoEntrada {
    nombre: string;
    precio: number;
    cantidadEntradas: number;
}
export declare const TipoEntradaSchema: import("mongoose").Schema<TipoEntrada, import("mongoose").Model<TipoEntrada, any, any, any, Document<unknown, any, TipoEntrada, any, {}> & TipoEntrada & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TipoEntrada, Document<unknown, {}, import("mongoose").FlatRecord<TipoEntrada>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TipoEntrada> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
