import { Repository } from 'typeorm';
import { CreateUserInput } from './inputs /create-user.input';
import { UpdateUserInput } from './inputs /update-user.input';
import { UserEntity } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    getOneUser(id: number): Promise<UserEntity>;
    getOneWhereEmail(email: string): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    removeUser(id: number): Promise<number>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>;
}
