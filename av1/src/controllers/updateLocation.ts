import { Request, Response } from 'express';
import { Maker } from '../models/Maker';

export async function updateLocation(req: Request, res: Response) {
  try {
    await Maker.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
