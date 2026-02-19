import { CreateTipoEntradaDto } from "../../tipo-entrada/dto/create-tipo-entrada.dto";
export declare class returnEventoDto {
    id: string;
    nombre: string;
    fecha: Date;
    descripcion: string;
    tipoEntrada: CreateTipoEntradaDto[];
    creadorId: string;
    imagePublicId: string;
}
