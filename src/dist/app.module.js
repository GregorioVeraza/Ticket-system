"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const evento_module_1 = require("./evento/evento.module");
const evento_controller_1 = require("./evento/evento.controller");
const tipo_entrada_module_1 = require("./tipo-entrada/tipo-entrada.module");
const ticket_module_1 = require("./ticket/ticket.module");
const cliente_module_1 = require("./cliente/cliente.module");
const staff_module_1 = require("./staff/staff.module");
const authz_module_1 = require("./authz/authz.module");
const mercado_pago_module_1 = require("./mercado-pago/mercado-pago.module");
const orden_compra_module_1 = require("./orden-compra/orden-compra.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(`mongodb+srv://gregoveraza_db_user:gre123@cluster0.mebxqkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`), evento_module_1.EventoModule, tipo_entrada_module_1.TipoEntradaModule, ticket_module_1.TicketModule, cliente_module_1.ClienteModule, staff_module_1.StaffModule, authz_module_1.AuthzModule, mercado_pago_module_1.MercadoPagoModule, orden_compra_module_1.OrdenCompraModule],
        controllers: [app_controller_1.AppController, evento_controller_1.eventoController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map