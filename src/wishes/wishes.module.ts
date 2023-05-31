import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wish } from './entities/wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wish])],
  exports: [],
  controllers: [],
  providers: [],
})
export class WishesModule {}
