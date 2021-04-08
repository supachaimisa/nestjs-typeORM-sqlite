import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Car from './car.entity';

@ObjectType()
@Entity({ name: 'tb_brands' })
export default class Brand {
  @Field({nullable: true })
  @PrimaryGeneratedColumn()
  brand_id: number;

  @Field({nullable: true })
  @Column({ name: 'brand_name' })
  brand_name: string;

  @Field({nullable: true })
  @Column({ name: 'brand_nation' })
  brand_nation: string;

  // Associations
  @OneToMany(
    () => Brand,
    brand => brand.carConnection,
  )
  carConnection: Promise<Car[]>;
}
