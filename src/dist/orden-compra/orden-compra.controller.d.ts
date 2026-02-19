import { OrdenCompraService } from './orden-compra.service';
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from './dto/update-orden-compra.dto';
export declare class OrdenCompraController {
    private readonly ordenCompraService;
    constructor(ordenCompraService: OrdenCompraService);
    create(createOrdenCompraDto: CreateOrdenCompraDto): Promise<string>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrdenCompraDto: UpdateOrdenCompraDto): string;
    remove(id: string): string;
}
