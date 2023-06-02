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
  @IsString()
  @Length(2, 30, {
    message: 'Имя должно быть от 2 до 30 символов',
  })
  username: string;

  @IsOptional()
  @IsString()
  @Length(2, 200, {
    message: 'Описание должно быть от 2 до 200 символов',
  })
  about: string;

  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'Введите корректную ссылку' })
  avatar: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Введите корректный Email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4, { message: 'Пароль должен быть длинной минимум 4 символа' })
  password: string;
}
