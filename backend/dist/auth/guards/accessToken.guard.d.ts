import { ExecutionContext } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { AuthService } from '../auth.service';
declare const CustomAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class CustomAuthGuard extends CustomAuthGuard_base {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
