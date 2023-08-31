import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export async function createMovie(req: Request, res: Response) {
  try {
    const movie = await Movie.create(req.body);
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
