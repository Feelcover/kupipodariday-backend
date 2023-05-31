import { MinLength } from 'class-validator';

export class SearchUserDto {
  @MinLength(2)
  query: string;
}
