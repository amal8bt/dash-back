import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User[]>;
    findOne(email: any): Promise<User>;
}
