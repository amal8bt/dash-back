import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindOneOptions  } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    
  ) {}

  async create(data:any): Promise<User[]> {
    return this.userRepository.save(data);
  }
  async findOne(email:any): Promise<User> {
    const options: FindOneOptions<User> = {
      where: {
        email,
      },
    };
    const user = await this.userRepository.findOne(options);
    return user;
  }
}
