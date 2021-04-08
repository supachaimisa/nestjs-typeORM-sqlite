import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import User from './db/models/user.entity';
import Message from './db/models/message.entity';
import Car from './db/models/car.entity';
import Brand from './db/models/brand.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Message) public readonly messageRepo: Repository<Message>,
    @InjectRepository(Car) public readonly carRepo: Repository<Car>,
    @InjectRepository(Brand) public readonly brandRepo: Repository<Brand>,
  ) {}
}

export default RepoService;
