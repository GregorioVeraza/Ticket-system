"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth0Guard = void 0;
const common_1 = require("@nestjs/common");
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
let Auth0Guard = class Auth0Guard {
    jwtCheck = (0, express_oauth2_jwt_bearer_1.auth)({
        audience: 'https://eventos.com',
        issuerBaseURL: 'https://dev-sywqwklbhi1vifgt.us.auth0.com/',
        tokenSigningAlg: 'RS256',
    });
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const res = context.switchToHttp().getResponse();
            return new Promise((resolve, reject) => {
                this.jwtCheck(req, res, (err) => {
                    if (err)
                        reject(new common_1.UnauthorizedException(err.message));
                    else
                        resolve(true);
                });
            });
        }
        catch (error) {
            console.error('AuthGuard Error:', error);
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
exports.Auth0Guard = Auth0Guard;
exports.Auth0Guard = Auth0Guard = __decorate([
    (0, common_1.Injectable)()
], Auth0Guard);
//# sourceMappingURL=auth0.guard.js.map