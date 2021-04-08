import Brand from './brand.entity';
export default class Car {
    car_id: number;
    car_model: string;
    car_year: string;
    car_price: number;
    car_rating: number;
    brandConnection: Promise<Brand>;
}
