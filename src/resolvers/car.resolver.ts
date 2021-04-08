import {
  Args,
  Mutation,
  Query,
  Resolver,
  Parent,
  ResolveField,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import RepoService from '../repo.service';
import Message from '../db/models/message.entity';
import Car from '../db/models/car.entity';
import CarInput, { DeleteCarInput } from './input/car.input';
import User from '../db/models/user.entity';
import { context } from '../db/loaders/index';
import Brand from '../db/models/brand.entity';

export const pubSub = new PubSub();

@Resolver(() => CarResolver)
export default class CarResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Car])
  public async getCars(): Promise<Car[]> {
    return this.repoService.carRepo.find();
  }

  // @Query(() => [Car])
  // public async getCarss(
  //   @Args('car_id') car_id: number,
  // ): Promise<Car[]> {
  //   return this.repoService.carRepo.find({
  //     where: { car_id },
  //   });
  // }

  @Query(() => Car, { nullable: true })
  public async getCar(@Args('car_id') car_id: number): Promise<Car> {
    return this.repoService.carRepo.findOne(car_id);
  }
  @Mutation(() => Car)
  public async createCar(
    @Args('data') input: CarInput,
  ): Promise<Car> {
    const car = this.repoService.carRepo.create({
      car_model: input.car_model,
      car_year: input.car_year,
      car_price: input.car_price
      // brand_id: input.brand_id
    });

    const response = await this.repoService.carRepo.save(car);

    pubSub.publish('carAdded', { carAdded: car });

    return response;
  }
  @Mutation(() => Car)
  public async updateCar(
    @Args('car_id') car_id: number,
    @Args('data') input: CarInput,
  ): Promise<Car> {
    const car = new Car;
    car.car_model = input.car_model,
    car.car_year = input.car_year,
    car.car_price = input.car_price
    this.repoService.carRepo.update(car_id, car);
    const response = await this.repoService.carRepo.findOne(car_id);
    return response ;
  }

  @Mutation(() => Car)
  public async deleteCar(
    @Args('car_id') car_id: number,
  ): Promise<Car> {
    const car = await this.repoService.carRepo.findOne(car_id);

    if (!car || car.car_id !== car_id)
      throw new Error(
        'Message does not exists or you are not the car',
      );

    const copy = { ...car };

    await this.repoService.carRepo.remove(car);

    return copy;
  }

  @Subscription(() => Car)
  carAdded() {
    return pubSub.asyncIterator('carAdded');
  }

  // @ResolveField(() => Brand, { name: 'brand_name' })
  // public async getBrand(
  //   @Parent() parent: Brand,
  //   @Context() { BrandLoader }: typeof context,
  // ): Promise<Brand> {
  //   return BrandLoader.load(parent.brand_id); // With DataLoader
  //   // return this.repoService.userRepo.findOne(parent.userId); // Without DataLoader
  // }
}
