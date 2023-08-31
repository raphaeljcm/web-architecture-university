import express from 'express';
import * as dotenv from 'dotenv';
import { router } from './router';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster-newton.xuf1uvi.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Connected to MongoDB');

    const app = express();
    app.use(express.json());
    app.use(router);

    app.listen(process.env.PORT, () =>
      console.log(`App listening on port ${process.env.PORT}!`),
    );
  })
  .catch(() => console.log('Failed to connect to MongoDB'));
