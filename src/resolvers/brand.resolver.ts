import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import Brand from '../db/models/brand.entity';
import BrandInput from './input/brand.input';

@Resolver(() => BrandResolver)
export default class BrandResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Brand])
  public async getBrands(): Promise<Brand[]> {
    return this.repoService.brandRepo.find();
  }

  // @Query(() => Brand, { nullable: true })
  // public async getBrand(@Args('id') id: number): Promise<Brand> {
  //   return this.repoService.brandRepo.findOne(id);
  // }

  // @Mutation(() => Brand)
  // public async createBrand(
  //   @Args('data') input: BrandInput,
  // ): Promise<Brand> {
  //   let brand = await this.repoService.brandRepo.findOne({
  //     where: { brand_name: input.brand_name.toUpperCase().trim() },
  //   });

  //   if (!brand) {
  //     brand = this.repoService.brandRepo.create({
  //       brand_name: input.brand_name.toUpperCase().trim(),
  //     });

  //     await this.repoService.brandRepo.save(brand);
  //   }

  //   return brand;
  // }
}
