import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashService } from 'src/hash/hash.service';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private hashService: HashService,
  ) {}

  findAll(query: FindManyOptions<User>) {
    return this.userRepository.find(query);
  }

  findOne(query: FindOneOptions<User>) {
    return this.userRepository.findOne(query);
  }
}
