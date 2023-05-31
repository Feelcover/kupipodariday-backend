import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishesModule } from 'src/wishes/wishes.module';
import { WishList } from './entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WishList]), WishesModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class WishlistModule {}