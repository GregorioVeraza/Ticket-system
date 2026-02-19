import { OmitType } from "@nestjs/swagger";
import { CreateClienteDto } from "./create-cliente.dto";
import { ResponseTicketDto } from "../../ticket/dto/response-ticket.dto";


export class ResponseMultipleClienteDto extends OmitType(CreateClienteDto, ['tickets'] as const) {
    tickets: ResponseTicketDto[];
}