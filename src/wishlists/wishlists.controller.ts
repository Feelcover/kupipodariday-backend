import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CustomRequest } from 'src/utils/CustomRequest';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
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
  getById(@Param('id') id: string) {
    return this.wishListService.getById(+id);
  }

  @Post()
  create(
    @Body() createWishlistDto: CreateWishlistDto,
    @Req() req: CustomRequest,
  ) {
    return this.wishListService.create(createWishlistDto, req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: CustomRequest) {
    return this.wishListService.delete(+id, req.user.id);
  }
}
