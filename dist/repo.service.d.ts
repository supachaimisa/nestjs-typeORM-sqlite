import { Repository } from 'typeorm';
import User from './db/models/user.entity';
import Message from './db/models/message.entity';
import Car from './db/models/car.entity';
import Brand from './db/models/brand.entity';
declare class RepoService {
    readonly userRepo: Repository<User>;
    readonly messageRepo: Repository<Message>;
    readonly carRepo: Repository<Car>;
    readonly brandRepo: Repository<Brand>;
    constructor(userRepo: Repository<User>, messageRepo: Repository<Message>, carRepo: Repository<Car>, brandRepo: Repository<Brand>);
}
export default RepoService;
