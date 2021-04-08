import Car from './car.entity';
export default class Brand {
    brand_id: number;
    brand_name: string;
    brand_nation: string;
    carConnection: Promise<Car[]>;
}
