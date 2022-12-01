/* eslint-disable prettier/prettier */
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateGroupDto {
  id: number;
  name: string;
  userId: number;
  user: User;
}
