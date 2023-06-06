import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class DatabaseFactory implements TypeOrmOptionsFactory {
    
}