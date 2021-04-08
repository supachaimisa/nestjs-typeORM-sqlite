import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
export default class CarInput {
  @Field()
  readonly car_model: string;

  @Field()
  readonly car_year: string;

  @Field()
  readonly car_price: number;

  // @Field()
  // readonly brand_id: number;
}

@InputType()
export class DeleteCarInput {
  @Field()
  readonly car_id: number;
}
