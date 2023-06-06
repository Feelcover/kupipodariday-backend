import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/config';
import { DatabaseFactory } from './config/database-config.factory';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, load: [config]}),
    TypeOrmModule.forRootAsync({useClass: DatabaseFactory}),
    UsersModule,
    WishlistModule,
    WishesModule,
    OffersModule,
  ],
  providers: [DatabaseFactory],
})
export class AppModule {}
