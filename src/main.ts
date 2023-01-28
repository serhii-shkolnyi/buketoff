import 'reflect-metadata';
import express, { Request, Response } from 'express';

import { apiConfig } from './config';
import { AppDataSource } from './data-source';
import { UserEntity } from './entity/user.entity';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/users', async (req:Request, res:Response) => {
    const createdUser = await AppDataSource.getRepository(UserEntity).save(req.body);
    res.json(createdUser);
});

app.get('/users', async (req:Request, res:Response) => {
    const allUser = await AppDataSource.getRepository(UserEntity).find();
    res.json(allUser);
});

AppDataSource.initialize()
    .then(() => {
        console.log('DataBase Connected Successfully');
        app.listen(apiConfig.PORT, async () => {
            console.log(`Server started on PORT: ${apiConfig.PORT}`);
        });
    })
    .catch((error) => console.log('Error Connecting DataBase', error));
