"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader = require("dataloader");
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("../models/brand.entity");
const batchBrands = async (brandIds) => {
    const brands = await typeorm_1.getRepository(brand_entity_1.default).findByIds(brandIds);
    const brandIdMap = {};
    brands.forEach(brand => {
        brandIdMap[brand.brand_id] = brand;
    });
    return brandIds.map(brand_id => brandIdMap[brand_id]);
};
exports.default = () => new DataLoader(batchBrands);
//# sourceMappingURL=BrandLoader.js.map