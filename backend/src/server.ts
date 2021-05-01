import app from './app';
require('dotenv').config();

async function startServer() {
    app.listen(process.env.PORT, () => {
      console.log(`Server Up at http://localhost:${process.env.PORT}`);
    });
}

startServer();