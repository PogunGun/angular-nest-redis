import { ConfigService } from "@nestjs/config";
export declare const typeOrmConfig: (configService: ConfigService) => Promise<{
    type: any;
    host: any;
    port: any;
    username: any;
    password: any;
    database: any;
    entities: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    logging: boolean;
}>;
