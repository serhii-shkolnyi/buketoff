import express from 'express';

import { apiConfig } from './config';

const app = express();

app.listen(apiConfig.PORT, () => {
    console.log(`Server started on PORT: ${apiConfig.PORT}`);
});
