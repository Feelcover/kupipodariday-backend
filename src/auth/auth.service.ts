import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { HashService } from "src/hash/hash.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UsersService,
        private hashService: HashService,
      ) {}
}