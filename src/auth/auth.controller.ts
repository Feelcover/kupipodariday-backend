import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CustomRequest } from 'src/utils/CustomRequest';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signin(@Req() req: CustomRequest) {
    return this.authService.auth(req.user);
  }
}
