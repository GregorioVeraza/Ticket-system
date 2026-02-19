import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("./schemas/cliente.schema").ClienteDocument>;
    register(secret: string, createClienteDto: CreateClienteDto): Promise<import("./schemas/cliente.schema").ClienteDocument>;
    findOne(id: string): Promise<import("./dto/response-cliente.dto").ResponseClienteTicketsDto>;
}
