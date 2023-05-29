import { IsNotEmpty, Length } from 'class-validator';
import { Column, Entity } from 'typeorm';
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
    avatar: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;
}
