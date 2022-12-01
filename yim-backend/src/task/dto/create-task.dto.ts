/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Group } from 'src/group/entities/group.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  id: number;
  @IsNotEmpty()
  name: string;
  userId: number;
  groupId: number;
  user: User;
  group: Group;
}
