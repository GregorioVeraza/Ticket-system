"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMultipleClienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cliente_dto_1 = require("./create-cliente.dto");
class ResponseMultipleClienteDto extends (0, swagger_1.OmitType)(create_cliente_dto_1.CreateClienteDto, ['tickets']) {
    tickets;
}
exports.ResponseMultipleClienteDto = ResponseMultipleClienteDto;
//# sourceMappingURL=response-multiple-cliente.dto.js.map