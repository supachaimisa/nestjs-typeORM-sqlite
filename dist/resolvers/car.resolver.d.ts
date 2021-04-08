import { PubSub } from 'graphql-subscriptions';
import RepoService from '../repo.service';
import Car from '../db/models/car.entity';
import CarInput, { DeleteCarInput } from './input/car.input';
import { context } from 'src/db/loaders';
import Brand from 'src/db/models/brand.entity';
export declare const pubSub: PubSub;
export default class CarResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getCars(): Promise<Car[]>;
    getCarss(car_id: number): Promise<Car[]>;
    getCar(id: number): Promise<Car>;
    createCar(input: CarInput): Promise<Car>;
    deletecar(input: DeleteCarInput): Promise<Car>;
    carAdded(): AsyncIterator<unknown, any, undefined>;
    getBrand(parent: Brand, { BrandLoader }: typeof context): Promise<Brand>;
}
