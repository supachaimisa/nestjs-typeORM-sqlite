"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BrandResolver_1;
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const repo_service_1 = require("../repo.service");
const brand_entity_1 = require("../db/models/brand.entity");
const brand_input_1 = require("./input/brand.input");
let BrandResolver = BrandResolver_1 = class BrandResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getBrands() {
        return this.repoService.brandRepo.find();
    }
    async getBrand(id) {
        return this.repoService.brandRepo.findOne(id);
    }
    async createBrand(input) {
        let brand = await this.repoService.brandRepo.findOne({
            where: { brand_name: input.brand_name.toUpperCase().trim() },
        });
        if (!brand) {
            brand = this.repoService.brandRepo.create({
                brand_name: input.brand_name.toUpperCase().trim(),
            });
            await this.repoService.brandRepo.save(brand);
        }
        return brand;
    }
};
__decorate([
    graphql_1.Query(() => [brand_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "getBrands", null);
__decorate([
    graphql_1.Query(() => brand_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "getBrand", null);
__decorate([
    graphql_1.Mutation(() => brand_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_input_1.default]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "createBrand", null);
BrandResolver = BrandResolver_1 = __decorate([
    graphql_1.Resolver(() => BrandResolver_1),
    __metadata("design:paramtypes", [repo_service_1.default])
], BrandResolver);
exports.default = BrandResolver;
//# sourceMappingURL=brand.resolver.js.map