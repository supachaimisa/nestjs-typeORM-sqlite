import RepoService from '../repo.service';
import Brand from '../db/models/brand.entity';
import BrandInput from './input/brand.input';
export default class BrandResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getBrands(): Promise<Brand[]>;
    getBrand(id: number): Promise<Brand>;
    createBrand(input: BrandInput): Promise<Brand>;
}
