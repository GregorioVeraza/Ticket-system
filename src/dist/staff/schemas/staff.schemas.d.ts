import { Document, Types } from 'mongoose';
export type EventoDocument = Staff & Document;
export declare enum StaffRole {
    STAFF = "staff",
    PRODUCER = "productora",
    VALIDATOR = "validador",
    ADMIN = "admin"
}
export declare class Staff {
    email: string;
    password: String;
    role: StaffRole;
}
export declare const StaffSchema: import("mongoose").Schema<Staff, import("mongoose").Model<Staff, any, any, any, Document<unknown, any, Staff, any, {}> & Staff & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Staff, Document<unknown, {}, import("mongoose").FlatRecord<Staff>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Staff> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export type UsuarioDocument = Staff & Document;
