/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepo: Repository<Group>,
    private userService: UsersService,
  ) {}
  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    try {
      const { name, user } = createGroupDto;
      const findUser = await this.userService.findOne(user.id);
      const DataInsert = this.groupRepo.create({
      name: name,
      user: findUser,
    });
      return await this.groupRepo.save(DataInsert);
    } catch (error) {
        throw new HttpException('Cannot Create Groups',HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Group[]> {
    return this.groupRepo.find();
  }

  //search group by UserID
  findGroupByUserId(id: number) {
    return this.groupRepo
      .createQueryBuilder('group')
      .leftJoinAndSelect('group.user', 'user')
      .where('group.userId = :userId', { userId: id })
      .getOne();
  }

  //serach group by GroupId for update group.
  findGroup(id: number): Promise<Group> {
    return this.groupRepo.findOneByOrFail({ id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const groupData = await this.findGroup(id);
    const { name } = updateGroupDto;
    if (name) groupData.name = name;
    return await this.groupRepo.save(groupData);
  }

  remove(id: number) {
    return this.groupRepo.delete({ id });
  }
}
