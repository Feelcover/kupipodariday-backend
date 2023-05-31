import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 30, {
    message: 'Имя должно быть от 2 до 30 символов',
  })
  username: string;

  @IsOptional()
  @Length(2, 200, {
    message: 'Описание должно быть от 2 до 200 символов',
  })
  about: string;

  @IsOptional()
  @IsUrl({}, { message: 'Введите ссылку в поле "avatar"' })
  avatar: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Введите корректный Email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
