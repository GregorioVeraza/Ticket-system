import { TipoEntradaService } from './tipo-entrada.service';
import { CreateTipoEntradaDto } from './dto/create-tipo-entrada.dto';
import { UpdateTipoEntradaDto } from './dto/update-tipo-entrada.dto';
export declare class TipoEntradaController {
    private readonly tipoEntradaService;
    constructor(tipoEntradaService: TipoEntradaService);
    create(createTipoEntradaDto: CreateTipoEntradaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/tipo-entrada.schema").TipoEntradaDocument, {}, {}> & import("./schemas/tipo-entrada.schema").TipoEntrada & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<import("./schemas/tipo-entrada.schema").TipoEntrada[]>;
    findOne(id: string): Promise<import("./schemas/tipo-entrada.schema").TipoEntrada | null>;
    update(id: string, updateTipoEntradaDto: UpdateTipoEntradaDto): string;
    remove(id: string): Promise<{
        deletedCount?: number;
    }>;
}
