import { CreateTipoEntradaDto } from './dto/create-tipo-entrada.dto';
import { UpdateTipoEntradaDto } from './dto/update-tipo-entrada.dto';
import { TipoEntrada, TipoEntradaDocument } from './schemas/tipo-entrada.schema';
import { Model } from 'mongoose';
export declare class TipoEntradaService {
    private tipoEntradaModel;
    constructor(tipoEntradaModel: Model<TipoEntradaDocument>);
    create(createTipoEntradaDto: CreateTipoEntradaDto): Promise<import("mongoose").Document<unknown, {}, TipoEntradaDocument, {}, {}> & TipoEntrada & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<TipoEntrada[]>;
    findOne(id: number): Promise<TipoEntrada | null>;
    update(id: number, updateTipoEntradaDto: UpdateTipoEntradaDto): string;
    remove(id: number): Promise<{
        deletedCount?: number;
    }>;
}
