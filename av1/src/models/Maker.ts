import { Schema, model } from 'mongoose';

export const Maker = model(
  'Maker',
  new Schema({
    name: String,
    location: [Number],
  }),
);
