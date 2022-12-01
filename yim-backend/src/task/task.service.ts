/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupService } from 'src/group/group.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    private userService: UsersService,
    private groupService: GroupService,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { name, group, user } = createTaskDto;
    const findUser = await this.userService.findOne(user.id);
    const findGroup = await this.groupService.findGroup(group.id);
    const dataInsert = await this.taskRepo.create({
      name: name,
      user: findUser,
      group: findGroup,
    });
    return await this.taskRepo.save(dataInsert);
  }

  async findOne(id: number): Promise<Task> {
    try {
      const data = this.taskRepo.findOneByOrFail({ id });
      return data;
    } catch (error) {
      throw new HttpException('Task doesn\'t exist.',HttpStatus.BAD_REQUEST);
    }
  }

  async findTaskByGid(id: number): Promise<any>{
    return await this.taskRepo
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.group','group')
      .where('task.groupId = :groupId',{groupId: id})
      .getMany();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
      const data = await this.findOne(id);
      const { name } = updateTaskDto;
      if (name) data.name = name;
      return await this.taskRepo.save(data);
    } catch (error) {
      throw new HttpException('Cannot Updata Task.',HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const data = await this.findOne(id);
      if (data.id) return await this.taskRepo.delete(id);
    } catch (error) {
      throw new HttpException('Cannot Remove.',HttpStatus.BAD_REQUEST);
    }
  }
}
