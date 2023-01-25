import express from 'express';
import 'reflect-metadata';

import { apiConfig } from './config';
import { AppDataSource } from './data-source';

const app = express();

app.listen(apiConfig.PORT, async () => {
    console.log(`Server started on PORT: ${apiConfig.PORT}`);
    try {
        const connect = await AppDataSource.initialize();
        if (connect) {
            console.log('connect to database');
        }
    } catch (err) {
        if (err) {
            console.log('error connect to database');
        }
    }
});
