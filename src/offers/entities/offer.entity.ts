import { User } from 'src/users/entities/user.entity';
import { MainEntity } from 'src/utils/MainEntity.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class Offer extends MainEntity {
  @ManyToOne(() => User, (user) => user.offer)
  user: User;

  @ManyToOne(()=> Wish, (wish) => wish.offer)
  item:Wish;
}
