import { Controller } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService,
    ){}
}