import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from './dto/update-orden-compra.dto';
import { Model } from 'mongoose';
import { ClienteService } from '../cliente/cliente.service';
import { TicketService } from '../ticket/ticket.service';
import { OrdenCompra, OrdenCompraDocument } from './schemas/OrdenCompra.schema';
export declare class OrdenCompraService {
    private ordenCompraModel;
    private ticketService;
    private clienteService;
    constructor(ordenCompraModel: Model<OrdenCompraDocument>, ticketService: TicketService, clienteService: ClienteService);
    create(createOrdenCompraDto: CreateOrdenCompraDto): Promise<string>;
    updatePreferenceId(id: string, preferenceId: string): Promise<OrdenCompra>;
    private crearTicket;
    updateEstado(nuevoEstado: string | undefined, idOrdenCompra: string): Promise<OrdenCompra>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrdenCompraDto: UpdateOrdenCompraDto): string;
    remove(id: number): string;
}
