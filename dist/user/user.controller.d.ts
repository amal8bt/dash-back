import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(name: string, lastName: string, email: string, password: string, number: number, adress: string): Promise<import("./user.entity").User[]>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
}
