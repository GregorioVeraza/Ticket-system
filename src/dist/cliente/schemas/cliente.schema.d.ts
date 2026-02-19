import { Document, Types } from 'mongoose';
import { Ticket } from '../../ticket/schemas/ticket.schema';
export type ClienteDocument = cliente & Document;
export declare class cliente {
    email: string;
    password?: String;
    auth0Sub: string;
    tickets: Ticket[];
    rol: string;
}
export declare const ClienteSchema: import("mongoose").Schema<cliente, import("mongoose").Model<cliente, any, any, any, Document<unknown, any, cliente, any, {}> & cliente & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, cliente, Document<unknown, {}, import("mongoose").FlatRecord<cliente>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<cliente> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
