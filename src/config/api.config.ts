import dotenv from 'dotenv';

dotenv.config();

export const apiConfig = {
    PORT: process.env.PORT || 5200,
};
