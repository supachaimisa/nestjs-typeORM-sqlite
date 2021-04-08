export default class CarInput {
    readonly car_model: string;
    readonly car_year: string;
    readonly car_price: number;
    readonly brand_id: number;
}
export declare class DeleteCarInput {
    readonly car_id: number;
    readonly brand_id: number;
}
