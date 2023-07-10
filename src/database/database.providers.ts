import { DataSource } from "typeorm";
import { User } from "../user/user.entity";

export const databaseProviders = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'test',
          entities: [User],
          synchronize: true,
        })
        return dataSource.initialize();
      },
    },
  ];