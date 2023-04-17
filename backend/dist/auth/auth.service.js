"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../users/user.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signUp(userData) {
        console.log(userData, 'userDatta');
        const userExists = await this.usersService.getOneWhereEmail(userData.email);
        if (userExists) {
            throw new common_1.BadRequestException('User is already exist!');
        }
        const hash = await this.hashData(userData.password);
        const newUser = await this.usersService.createUser(Object.assign(Object.assign({}, userData), { password: hash }));
        const token = await this.getToken(newUser.id, newUser.email);
        console.log(token);
        return {
            access_token: token,
            user: newUser
        };
    }
    async signIn(data) {
        console.log(data);
        const user = await this.usersService.getOneWhereEmail(data.email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        console.log(user);
        console.log(data.password);
        const passwordMatches = await argon2.verify(user.password, data.password);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('password is wrong!');
        }
        const token = await this.getToken(user.id, user.email);
        return {
            access_token: token,
            user: user
        };
    }
    async hashData(data) {
        return argon2.hash(data);
    }
    async verifyUser(authToken) {
        const verify = await this.jwtService.verifyAsync(authToken, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
        });
        return verify;
    }
    async getToken(userId, email) {
        return this.jwtService.signAsync({
            id: userId,
            email,
        }, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
            expiresIn: '5d',
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map