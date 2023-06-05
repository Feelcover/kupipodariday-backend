import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class DatabaseFactory implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {

    }