import { IsUrl, Length } from "class-validator";
import { MainEntity } from "src/utils/MainEntity.entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Wish extends MainEntity {
    @Column()
    @Length(1, 250)
    name: string;

    @Column()
    link: string;

    @Column()
    @IsUrl()
    image: string;
}