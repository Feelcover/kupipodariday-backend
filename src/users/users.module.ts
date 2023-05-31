import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wish } from 'src/wishes/entities/wish.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Wish])],
  exports: [],
  controllers: [],
  providers: [],
})
export class UsersModule {}