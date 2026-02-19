import { CreateEventoDto } from './dto/create-evento.dto';
import { EventoService } from './evento.service';
import { Evento } from './schemes/evento.scheme';
import { TipoEntrada } from '../tipo-entrada/schemas/tipo-entrada.schema';
import { updateTipoEntradaDto } from './dto/update-tipo-entrada-evento';
export declare class eventoController {
    private readonly eventoServices;
    constructor(eventoServices: EventoService);
    create(CreateEventoDto: CreateEventoDto): Promise<Evento>;
    findAll(): Promise<Evento[]>;
    findOne(nombre: string): Promise<TipoEntrada[] | null>;
    update(update: updateTipoEntradaDto): Promise<string | updateTipoEntradaDto>;
    remove(id: string): Promise<string>;
}
