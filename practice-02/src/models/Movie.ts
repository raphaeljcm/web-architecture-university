import { Schema, model } from 'mongoose';

export const Movie = model(
  'Movie',
  new Schema({
    title: String,
    synopsis: String,
    duration: Number,
    releaseDate: { type: Date, default: Date.now },
    image: String,
    categories: [String],
  }),
);
