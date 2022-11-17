import express, { Express } from 'express';
import dotenv from 'dotenv';
import helloRouter from './routes/hello';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/v1/hello', helloRouter);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})