import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
export declare class UserIsUserGuard implements CanActivate {
    private readonly userService;
    constructor(userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
