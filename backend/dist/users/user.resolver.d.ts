import { CreateUserInput } from './inputs /create-user.input';
import { UpdateUserInput } from './inputs /update-user.input';
import { UserEntity } from './user.entity';
import { UserService } from "./user.service";
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>;
    removeUser(id: number): Promise<number>;
    getOneUser(id: number): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
}
