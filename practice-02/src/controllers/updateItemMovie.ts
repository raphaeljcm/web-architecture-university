import { Request, Response } from 'express';
import { Movie } from '../models/Movie';

export async function updateItemMovie(req: Request, res: Response) {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
