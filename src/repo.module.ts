import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.service';
import User from './db/models/user.entity';
import Message from './db/models/message.entity';
import Car from './db/models/car.entity';
import Brand from './db/models/brand.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Message, Car, Brand])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;
