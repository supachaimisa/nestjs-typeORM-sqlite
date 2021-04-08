import * as DataLoader from 'dataloader';
import { getRepository } from 'typeorm';

import Brand from '../models/brand.entity';

const batchBrands = async (brandIds: number[]) => {
  const brands = await getRepository(Brand).findByIds(brandIds);

  const brandIdMap: { [brand_id: number]: Brand } = {};

  brands.forEach(brand => {
    brandIdMap[brand.brand_id] = brand;
  });

  return brandIds.map(brand_id => brandIdMap[brand_id]);
};

export default () => new DataLoader(batchBrands);
