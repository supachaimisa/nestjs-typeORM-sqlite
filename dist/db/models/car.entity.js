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
var Car_1;
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Car = Car_1 = class Car {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Car.prototype, "car_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ name: 'car_model' }),
    __metadata("design:type", String)
], Car.prototype, "car_model", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ name: 'car_year' }),
    __metadata("design:type", String)
], Car.prototype, "car_year", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ name: 'car_price' }),
    __metadata("design:type", Number)
], Car.prototype, "car_price", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ name: 'car_rating' }),
    __metadata("design:type", Number)
], Car.prototype, "car_rating", void 0);
__decorate([
    typeorm_1.OneToMany(() => Car_1, car => car.brandConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: 'brand_id' }),
    __metadata("design:type", Promise)
], Car.prototype, "brandConnection", void 0);
Car = Car_1 = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'Cars' })
], Car);
exports.default = Car;
//# sourceMappingURL=car.entity.js.map