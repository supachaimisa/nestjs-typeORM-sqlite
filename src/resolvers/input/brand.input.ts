import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class BrandInput {
  @Field()
  readonly brand_name: string;
  @Field()
  readonly brand_nation: string;
}
