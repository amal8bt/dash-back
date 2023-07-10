import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import * as bcrypt from 'bcrypt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
