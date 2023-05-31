import { IsBoolean, IsNumber, NotEquals } from "class-validator";

export class CreateOfferDto {
    @IsNumber()
    @NotEquals(0)
    amount: number;

    @IsBoolean()
    hidden: boolean;

    @IsNumber()
    itemId: number;
}