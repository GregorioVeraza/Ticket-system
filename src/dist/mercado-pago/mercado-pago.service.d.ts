import { CreateMercadoPagoDto } from './dto/create-mercado-pago.dto';
import { OrdenCompraService } from '../orden-compra/orden-compra.service';
export declare class MercadoPagoService {
    private ordenCompraService;
    private client;
    private paymentClient;
    constructor(ordenCompraService: OrdenCompraService);
    createPreference(createeventoDto: CreateMercadoPagoDto, auth0Sub: string): Promise<{
        init_point: string;
        id: string;
    }>;
    recibirPayment(paymentId: string): Promise<import("mercadopago/dist/clients/payment/commonTypes").PaymentResponse>;
    recibirNotificacion(body: any): Promise<void>;
}
