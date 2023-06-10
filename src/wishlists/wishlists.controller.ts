import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { WishlistService } from './wishlists.service';

@UseGuards(JwtGuard)
@Controller('wishlistlists')
export class WishlistsController {
  constructor(private readonly wishListService: WishlistService) {}

  @Get()
  getWishlists() {
    return this.wishListService.getWishLists();
  }

  @Get()
  getById(@Param('id') id:string){
    return this.wishListService.getById(+id);
  }
}
