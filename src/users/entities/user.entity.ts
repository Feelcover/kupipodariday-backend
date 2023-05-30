import { IsNotEmpty, IsUrl, Length } from 'class-validator';
import { Wish } from 'src/wishes/entities/wish.entity';
import { WishList } from 'src/wishlists/entities/wishlist.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { MainEntity } from '../../utils/MainEntity.entity';

@Entity()
export class User extends MainEntity {
    @Column({unique: true})
    @IsNotEmpty()
    @Length(2, 30)
    username: string;

    @Column({default:"Пока ничего не рассказал о себе"})
    @Length(2, 200)
    about: string;

    @Column({default:"https://i.pravatar.cc/300"})
    @IsUrl()
    avatar: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(()=> Wish, (wish) =>wish.owner)
    wishes:Wish[];

    @OneToMany(()=> WishList, (wishlist)=> wishlist.owner)
    wishlist:WishList[];

    @OneToMany() //для Offer
}
