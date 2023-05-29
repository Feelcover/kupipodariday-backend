import { Entity } from 'typeorm';
import { MainEntity } from '../../utils/MainEntity.entity';

@Entity()
export class User extends MainEntity {}
