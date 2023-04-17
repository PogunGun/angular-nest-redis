"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const typeOrmConfig = async (configService) => ({
    type: configService.get('TYPEORM_TYPE'),
    host: configService.get('TYPEORM_HOST'),
    port: configService.get('TYPEORM_PORT'),
    username: configService.get('TYPEORM_USERNAME'),
    password: configService.get('TYPEORM_PASS'),
    database: configService.get('TYPEORM_DATABASE'),
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
});
exports.typeOrmConfig = typeOrmConfig;
//# sourceMappingURL=type-orm.config.js.map