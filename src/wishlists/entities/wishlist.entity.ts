import { Length } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { MainEntity } from "src/utils/MainEntity.entity";
import { Wish } from "src/wishes/entities/wish.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";


@Entity()
export class WishList extends MainEntity {
    @Column()
    @Length(1, 250)
    name:string;

    @Column()
    @Length(0, 1500)
    description:string;

    @Column()
    image:string;

    @ManyToMany(()=>Wish, (wish) => wish.name)
    @JoinTable()
    items: Wish[];

    @ManyToOne(()=> User, (user) => user.wishlists)
    owner:User;

    
}