import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, load: [config]}),
    UsersModule,
    WishlistModule,
    WishesModule,
    OffersModule,
  ],
})
export class AppModule {}
