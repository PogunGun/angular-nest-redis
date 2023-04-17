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
exports.CustomAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../../users/user.service");
const auth_service_1 = require("../auth.service");
let CustomAuthGuard = class CustomAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(authService, userService) {
        super();
        this.authService = authService;
        this.userService = userService;
    }
    async canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            const decodedToken = await this.authService.verifyUser(req.cookies.jwt.tokens.accessToken);
            const user = await this.userService.getOneUser(decodedToken.id);
            if (user) {
                req.user = user;
                return true;
            }
            else {
                throw new common_1.UnauthorizedException('User is not auth');
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException('User is not auth');
        }
    }
};
CustomAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], CustomAuthGuard);
exports.CustomAuthGuard = CustomAuthGuard;
//# sourceMappingURL=accessToken.guard.js.map