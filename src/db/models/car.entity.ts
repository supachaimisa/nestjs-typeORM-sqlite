import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';
import Brand from './brand.entity';
import Sale from './sale.entity';

@ObjectType()
@Entity({ name: 'tb_cars' })
export default class Car {
  @Field({nullable: true })
  @PrimaryGeneratedColumn()
  car_id: number;

  @Field({nullable: true })
  @Column({ name: 'car_model' })
  car_model: string;

  @Field({nullable: true })
  @Column({ name: 'car_year' })
  car_year: string;

  @Field({nullable: true })
  @Column({ name: 'car_price' })
  car_price: number;
  
  @Field({nullable: true })
  @Column({ name: 'car_rating' })
  car_rating: number;

  // Associations
  @OneToMany(
    () => Car ,
    car => car.brandConnection,
    { primary: true },
    // () => Sale ,
    // sale => sale.userConnection,
  )
  @JoinColumn({ name: 'brand_id' })
  // ,name: 'brand_id' 
  
  brandConnection: Promise<Brand>;
  // saleConnection: Promise<Sale[]>;
}
