/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { throws } from 'assert';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any){
    const findUser = await this.usersService.findByUsername(user.username);
    const { password, ...result } = findUser;
    const playload = { username: result.username, sub: result.id };
    return {
      msg: 'login complete',
      user: result,
      access_token: this.jwtService.sign(playload),
    }
  }
}
