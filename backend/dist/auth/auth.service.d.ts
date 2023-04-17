import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/users/user.service';
import { UserEntity } from 'src/users/user.entity';
import { LoginInput } from "./inputs/login.input";
import { CreateUserInput } from "../users/inputs /create-user.input";
import { LoginResponse } from "./dto/login.response";
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UserService, jwtService: JwtService, configService: ConfigService);
    signUp(userData: CreateUserInput): Promise<LoginResponse>;
    signIn(data: LoginInput): Promise<LoginResponse>;
    hashData(data: string): Promise<string>;
    verifyUser(authToken: any): Promise<UserEntity>;
    getToken(userId: number, email: string): Promise<string>;
}
