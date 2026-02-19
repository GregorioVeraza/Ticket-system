import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class Auth0Guard implements CanActivate {
    private jwtCheck;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
