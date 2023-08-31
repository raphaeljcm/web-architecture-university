import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export async function listMovies(req: Request, res: Response) {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
