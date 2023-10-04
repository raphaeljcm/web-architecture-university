import { Schema, model } from 'mongoose';

export const Marker = model(
  'Marker',
  new Schema({
    name: String,
    location: [Number],
  }),
);
