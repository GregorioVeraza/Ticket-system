import { Model } from 'mongoose';
import { Evento, EventoDocument } from './schemes/evento.scheme';
import { CreateEventoDto } from './dto/create-evento.dto';
import { updateTipoEntradaDto } from './dto/update-tipo-entrada-evento';
export declare class EventoService {
    private eventoModel;
    constructor(eventoModel: Model<EventoDocument>);
    create(createeventoDto: CreateEventoDto): Promise<Evento>;
    findAll(): Promise<Evento[]>;
    findByName(nombre: string): Promise<Evento | null>;
    update(update: updateTipoEntradaDto): Promise<updateTipoEntradaDto | string>;
    remove(id: string): Promise<string>;
}
