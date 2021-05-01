import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import taskRoutes from './routes/tasks';

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

export default app;