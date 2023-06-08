import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WishesService } from "src/wishes/wishes.service";
import { DataSource, Repository } from "typeorm";
import { Offer } from "./entities/offer.entity";


@Injectable()
export class OffersService {
    constructor(
        private dataSource: DataSource,
        @InjectRepository(Offer)
        private offerRepository: Repository<Offer>,
        private wishesService: WishesService,
        ) {}
}