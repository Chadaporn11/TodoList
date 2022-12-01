/* eslint-disable prettier/prettier */
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  signIn(@Request() req: any): Promise<any> {
    return this.authService.login(req.body);
  }
}
