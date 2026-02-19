import { MercadoPagoService } from './mercado-pago.service';
import { CreateMercadoPagoDto } from './dto/create-mercado-pago.dto';
export declare class MercadoPagoController {
    private readonly mercadoPagoService;
    constructor(mercadoPagoService: MercadoPagoService);
    createPreference(req: any, CreateMercadoPagoDto: CreateMercadoPagoDto): Promise<{
        initPoint: {
            init_point: string;
            id: string;
        };
    }>;
    recibirNotificacion(body: any): Promise<{
        status: string;
    }>;
}
