import { User } from 'src/users/entities/user.entity';
import { MainEntity } from 'src/utils/MainEntity.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class Offer extends MainEntity {
  @ManyToOne(() => User, (user) => user.offer)
  user: User;
}
