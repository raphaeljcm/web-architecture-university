import { Request, Response } from 'express';
import { Maker } from '../models/Maker';

export async function listAllLocations(req: Request, res: Response) {
  try {
    const makers = await Maker.find();
    res.json(makers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
