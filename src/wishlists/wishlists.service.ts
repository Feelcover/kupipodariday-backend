import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { WishList } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishList)
    private wishlistRepository: Repository<WishList>,
  ) {}

  findAll(query: FindManyOptions<WishList>) {
    return this.wishlistRepository.find(query);
  }

  findOne(query: FindOneOptions<WishList>) {
    return this.wishlistRepository.findOne(query);
  }

  getWishLists() {
    return this.findAll({ relations: ['items', 'owner'] });
  }

  getById(id: number) {
    return this.findOne({
      where: { id },
      relations: ['items', 'owner'],
    });
  }
}
