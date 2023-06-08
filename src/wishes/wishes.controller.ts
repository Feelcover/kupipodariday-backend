import { Controller, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { WishesService } from "./wishes.service";

@Controller()
export class WishesController {
    constructor (private readonly wihesService: WishesService){}
    @UseGuards(JwtGuard)


}