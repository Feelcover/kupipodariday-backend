import { Controller, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt.guard";


@UseGuards(JwtGuard)
@Controller("offers")
export class OffersController {
}