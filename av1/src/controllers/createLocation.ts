import { Request, Response } from 'express';
import { Maker } from '../models/Maker';

export async function createLocation(req: Request, res: Response) {
  try {
    const location = await Maker.create(req.body);
    res.json(location);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
