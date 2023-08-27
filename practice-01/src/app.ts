import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import { homeRouter } from './routes/home';
import { banksRouter } from './routes/banks';

const dirname = path.resolve();
dotenv.config();
const app = express();

app.use(express.json());
app.use('/banks', banksRouter);
app.use('/', homeRouter);

app.listen(process.env.PORT, () => console.log('Running on port: 3333'));

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'src', 'views'));
