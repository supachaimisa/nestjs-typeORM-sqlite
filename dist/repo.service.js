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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("./db/models/user.entity");
const message_entity_1 = require("./db/models/message.entity");
const car_entity_1 = require("./db/models/car.entity");
const brand_entity_1 = require("./db/models/brand.entity");
let RepoService = class RepoService {
    constructor(userRepo, messageRepo, carRepo, brandRepo) {
        this.userRepo = userRepo;
        this.messageRepo = messageRepo;
        this.carRepo = carRepo;
        this.brandRepo = brandRepo;
    }
};
RepoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.default)),
    __param(1, typeorm_2.InjectRepository(message_entity_1.default)),
    __param(2, typeorm_2.InjectRepository(car_entity_1.default)),
    __param(3, typeorm_2.InjectRepository(brand_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], RepoService);
exports.default = RepoService;
//# sourceMappingURL=repo.service.js.map