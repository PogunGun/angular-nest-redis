import { AuthService } from '../auth/auth.service';
import { CreateUserInput } from "../users/inputs /create-user.input";
import { LoginInput } from "./inputs/login.input";
import { LoginResponse } from './dto/login.response';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserInput): Promise<LoginResponse>;
    login(login: LoginInput): Promise<LoginResponse>;
}
