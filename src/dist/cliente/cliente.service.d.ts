import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteDocument } from './schemas/cliente.schema';
import { Model } from 'mongoose';
import { ResponseClienteTicketsDto } from './dto/response-cliente.dto';
export declare class ClienteService {
    private clienteModel;
    constructor(clienteModel: Model<ClienteDocument>);
    create(createClienteDto: CreateClienteDto): Promise<ClienteDocument>;
    findOneById(id: string): Promise<string>;
    findOne(id: string): Promise<ResponseClienteTicketsDto>;
    findByAuth0Sub(auth0Sub: string): Promise<ClienteDocument>;
    update(id: number, updateClienteDto: UpdateClienteDto): string;
    addTicket(idCliente: string, idTicket: string): void;
    remove(id: number): string;
}
