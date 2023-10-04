import { Request, Response } from 'express';
import { Maker } from '../models/Maker';

export async function deleteLocation(req: Request, res: Response) {
  try {
    await Maker.findByIdAndDelete(req.params.id);
    res.send('Location deleted');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
