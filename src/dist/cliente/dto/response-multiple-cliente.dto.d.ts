import { CreateClienteDto } from "./create-cliente.dto";
import { ResponseTicketDto } from "../../ticket/dto/response-ticket.dto";
declare const ResponseMultipleClienteDto_base: import("@nestjs/common").Type<Omit<CreateClienteDto, "tickets">>;
export declare class ResponseMultipleClienteDto extends ResponseMultipleClienteDto_base {
    tickets: ResponseTicketDto[];
}
export {};
