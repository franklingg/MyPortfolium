import app from "./app";
import config from "./config";
import databaseConfig from './config/database';

async function startServer() {
  databaseConfig();
  app.listen(config.port, () => {
    console.log(`Server Up at http://localhost:${config.port}`);
  });
}
export default app;
startServer();
