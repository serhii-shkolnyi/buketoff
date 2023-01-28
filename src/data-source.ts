import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'shkolnyi',
    password: 'postgresroot',
    database: 'buketoff',
    synchronize: true,
    logging: false,
    entities: ['./src/entity/**/*.ts'],
    subscribers: [],
    migrations: ['./src/migration/**/*.ts'],
});
