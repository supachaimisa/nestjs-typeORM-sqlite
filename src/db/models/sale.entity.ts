import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Message from './message.entity';

@ObjectType()
@Entity({ name: 'sales' })
export default class Sale {
  @Field()
  @PrimaryGeneratedColumn()
  sale_id: number;

  @Field()
  @Column({ name: 'sale_name' })
  sale_name: string;

  // Associations
  @OneToMany(
    () => Message,
    message => message.userConnection,
  )
  messageConnection: Promise<Message[]>;
}
