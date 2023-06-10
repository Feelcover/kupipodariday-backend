import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtConfig } from "src/config/jwt-config.factory";
import { HashModule } from "src/hash/hash.module";
import { UsersModule } from "src/users/users.module";


@Module({
    imports:[
        PassportModule,
        UsersModule,
        HashModule,
        JwtModule.registerAsync({
            useClass: JwtConfig
        })
    ],
    providers:[],
    controllers:[],
    exports:[],
})