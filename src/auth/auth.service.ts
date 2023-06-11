import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { HashService } from "src/hash/hash.service";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UsersService,
        private hashService: HashService,
      ) {}

      auth(user:User ) {
        const payload = {sub: user.id};

        return {
            access_token: this.jwtService.sign(payload, {expiresIn: '24h'}),
        }
      }
}