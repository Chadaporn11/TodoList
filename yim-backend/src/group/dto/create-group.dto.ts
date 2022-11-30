import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateGroupDto {
  id: number;
  name: string;
  user: User;
}
