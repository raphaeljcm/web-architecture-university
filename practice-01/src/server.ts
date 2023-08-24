import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import { router } from './routes';

const dirname = path.resolve();
dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => console.log('Running on port: 3333'));

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'src', 'views'));
