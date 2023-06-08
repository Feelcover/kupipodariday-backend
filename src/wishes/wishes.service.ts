import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { CreateWishDto } from './dto/create-wish.dto';
import { Wish } from './entities/wish.entity';

@Injectable()
export class WishesService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Wish)
    private wishesRepository: Repository<Wish>,
  ) {}

   findAll(query: FindManyOptions<Wish>) {
    return this.wishesRepository.find(query);
  }

   findOne(query: FindOneOptions<Wish>) {
    return this.wishesRepository.findOne(query);
  }

  async create(createWishDto: CreateWishDto, ownerId: number) {}
}
