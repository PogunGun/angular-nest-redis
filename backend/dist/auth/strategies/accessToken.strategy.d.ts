import { ConfigService } from '@nestjs/config';
type JwtPayload = {
    sub: string;
    email: string;
    name: string;
    id: string;
};
declare const AccessTokenStrategy_base: new (...args: any[]) => any;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
