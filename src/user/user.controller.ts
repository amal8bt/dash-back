import { BadRequestException, Body, Controller, Get, Post, UnauthorizedException, Res } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import cookieParser from 'cookie-parser';
import { Response } from 'express';

@Controller('api')
export class UserController {
    constructor(
      private readonly userService: UserService,
      private jwtService: JwtService) {}

  @Post('register')
  async register(
    @Body('name') name:string,
    @Body('lastName') lastName:string,
    @Body('email') email:string,
    @Body('password') password:string,
    @Body('number') number:number,
    @Body('adress') adress:string,
  ) {
    const saltOrRounds = 12;
    const hashedPwd = await bcrypt.hash(password, saltOrRounds);
    return this.userService.create({
      name,
      lastName,
      email,
      password: hashedPwd,
      number,
      adress
    });
  }

  @Post('login')
  async login(
    @Body('email') email:string,
    @Body('password') password:string,
    @Res ({passthrough:true}) response: Response
  ) {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, userMail: user.email };
    const token = await this.jwtService.signAsync(payload);
    response.cookie('token',token);
    return {
      message:'success'
    };
  }
  
}
