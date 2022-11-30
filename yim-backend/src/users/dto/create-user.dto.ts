import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsNotEmpty({ message: 'username cannot empty' })
  username: string;
  @Length(8, 99)
  password: string;
  @Length(10, 10)
  phone_number: string;
  address: string;
  img: string;
}
