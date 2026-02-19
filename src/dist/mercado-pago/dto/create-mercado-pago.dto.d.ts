declare class CreateTipoEntrada {
    title: string;
    quantity: number;
    unit_price: number;
}
export declare class CreateMercadoPagoDto {
    items: CreateTipoEntrada[];
    eventoId: string;
}
export {};
