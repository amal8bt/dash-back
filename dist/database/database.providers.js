"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'test',
                entities: [user_entity_1.User],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map