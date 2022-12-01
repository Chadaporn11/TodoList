import { IsNotEmpty } from 'class-validator';
import { Group } from 'src/group/entities/group.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  todo: string
  user: User;
  group: Group;
}
