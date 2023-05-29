import { IsInt, IsUrl, Length } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { MainEntity } from "src/utils/MainEntity.entity";
import { Column, Entity, ManyToOne } from "typeorm";


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

    @Column()
    @IsInt()
    price: number;

    @Column({default:0})
    @IsInt()
    raised:number;

    @ManyToOne(()=> User, (owner) => owner.wishes)
    owner: User;

    @Column()
    @Length(1, 1024)
    description: string;

    @OneToMany()//Offer

    @Column({default: 0})
    copied:number;
}