/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const { username, password, phone_number, address, img } = createUserDto;
      const hashPassword = await bcrypt.hashSync(password, 10);
      const user = await this.userRepo.create({
        username: username,
        password: hashPassword,
        phone_number: phone_number,
        address: address,
        img: img,
      });
      const responseUser = await this.userRepo.save(user);
      return { msg: 'InsertSucess', data: responseUser };
    } catch (error) {
      throw new HttpException('cannot create user', HttpStatus.BAD_REQUEST);
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findUserCreated(id: number) {
    return await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.userCreate', 'userCreate')
      .where('user.userCreateId = :userId', { userId: id })
      .getOne();
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepo.findOneByOrFail({ id });
    } catch (error) {
      throw new HttpException('Cannot find user', HttpStatus.BAD_REQUEST);
    }
  }

  findByUsername(username: string): Promise<User> {
    return this.userRepo.findOneByOrFail({ username });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    try {
      const user = await this.findOne(id);
      const { username, password, phone_number, address, img } = updateUserDto;
      if (username) user.username = username;
      if (password) user.password = password;
      if (phone_number) user.phone_number = phone_number;
      if (address) user.address = address;
      if (img) user.img = img;
      const responseUser = await this.userRepo.save(user);
      return { msg: 'UpdateSuccess', data: responseUser };
    } catch (error) {
      throw new HttpException('Cannot update data.', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.findOne(id);
      const removeUser = await this.userRepo.delete({
        username: user.username,
      });
      return { msg: 'Delete Success' };
    } catch (error) {
      throw new HttpException('Cannot Remove data.', HttpStatus.BAD_REQUEST);
    }
  }
}
