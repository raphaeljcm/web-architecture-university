import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export async function deleteMovie(req: Request, res: Response) {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (movie) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
