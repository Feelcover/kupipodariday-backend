import { User } from 'src/users/entities/user.entity';
import { MainEntity } from 'src/utils/MainEntity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Offer extends MainEntity {
  @ManyToOne(() => User, (user) => user.offers)
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;

  @Column()
  amount: number;

  @Column({ default: false })
  hidden: boolean;
}
