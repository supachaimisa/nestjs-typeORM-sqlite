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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const message_entity_1 = require("./message.entity");
let Sale = class Sale {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Sale.prototype, "sale_id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ name: 'sale_name' }),
    __metadata("design:type", String)
], Sale.prototype, "sale_name", void 0);
__decorate([
    typeorm_1.OneToMany(() => message_entity_1.default, message => message.userConnection),
    __metadata("design:type", Promise)
], Sale.prototype, "messageConnection", void 0);
Sale = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'sales' })
], Sale);
exports.default = Sale;
//# sourceMappingURL=sale.entity.js.map