import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule,
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService,
  ],
})
export class UserModule {
}