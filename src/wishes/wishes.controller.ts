import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { WishesService } from './wishes.service';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @Get('last')
  getLastWishes() {
    return this.wishesService.getLast();
  }

  @Get('top')
  getTopWishes() {
    return this.wishesService.getTop();
  }

@UseGuards(JwtGuard)
@Get(':id')
getById(@Param('id') id: string) {
return this.wishesService.getById(+id)
}
}
