import mongoose from 'mongoose';
import config from './index';

const databaseConfig = () => {
    let DB_URL: string | undefined;
    switch(config.node){
        case "prod":
        case "production":
            DB_URL = config.db.prod;
            break;
        case "test":
        case "testing":
            DB_URL = config.db.test;
            break;
        case "dev":
        case "development":
            DB_URL = config.db.dev;
            break;
    }

    mongoose.set('useFindAndModify', false);
    mongoose.connection.on('connected', () => console.log('Conectado com o banco de dados!'));
    mongoose.connection.on('error', (err) => console.log("Erro na conexão com o banco de dados: " + err));

    mongoose.connect(DB_URL!, {
        useNewUrlParser: true,
        poolSize: 5,
        useUnifiedTopology: true
    });
}

export default databaseConfig;