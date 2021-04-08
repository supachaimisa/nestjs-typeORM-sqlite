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
var CarResolver_1;
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const repo_service_1 = require("../repo.service");
const car_entity_1 = require("../db/models/car.entity");
const car_input_1 = require("./input/car.input");
const loaders_1 = require("../db/loaders");
const brand_entity_1 = require("../db/models/brand.entity");
exports.pubSub = new graphql_subscriptions_1.PubSub();
let CarResolver = CarResolver_1 = class CarResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getCars() {
        return this.repoService.carRepo.find();
    }
    async getCarss(car_id) {
        return this.repoService.carRepo.find({
            where: { car_id },
        });
    }
    async getCar(id) {
        return this.repoService.carRepo.findOne(id);
    }
    async createCar(input) {
        const car = this.repoService.carRepo.create({
            car_model: input.car_model,
            car_year: input.car_year,
            car_price: input.car_price,
        });
        const response = await this.repoService.carRepo.save(car);
        exports.pubSub.publish('carAdded', { carAdded: car });
        return response;
    }
    async deletecar(input) {
        const car = await this.repoService.carRepo.findOne(input.car_id);
        if (!car || car.car_id !== input.car_id)
            throw new Error('Message does not exists or you are not the message author');
        const copy = Object.assign({}, car);
        await this.repoService.carRepo.remove(car);
        return copy;
    }
    carAdded() {
        return exports.pubSub.asyncIterator('carAdded');
    }
    async getBrand(parent, { BrandLoader }) {
        return BrandLoader.load(parent.brand_id);
    }
};
__decorate([
    graphql_1.Query(() => [car_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getCars", null);
__decorate([
    graphql_1.Query(() => [car_entity_1.default]),
    __param(0, graphql_1.Args('car_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getCarss", null);
__decorate([
    graphql_1.Query(() => car_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getCar", null);
__decorate([
    graphql_1.Mutation(() => car_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_input_1.default]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "createCar", null);
__decorate([
    graphql_1.Mutation(() => car_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_input_1.DeleteCarInput]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "deletecar", null);
__decorate([
    graphql_1.Subscription(() => car_entity_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarResolver.prototype, "carAdded", null);
__decorate([
    graphql_1.ResolveField(() => brand_entity_1.default, { name: 'brand_name' }),
    __param(0, graphql_1.Parent()),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_entity_1.default, Object]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getBrand", null);
CarResolver = CarResolver_1 = __decorate([
    graphql_1.Resolver(() => CarResolver_1),
    __metadata("design:paramtypes", [repo_service_1.default])
], CarResolver);
exports.default = CarResolver;
//# sourceMappingURL=car.resolver.js.map