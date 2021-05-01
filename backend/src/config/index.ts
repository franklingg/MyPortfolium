import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || '3000',
    node: process.env.NODE_ENV,
    db:{
        prod: process.env.DB_URL_PROD,
        test: process.env.DB_URL_TEST,
        dev: process.env.DB_URL_DEV
    }
}

export default config;