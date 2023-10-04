import { Request, Response } from 'express';
import { Maker } from '../models/Maker';

export async function listLocation(req: Request, res: Response) {
  try {
    const location = await Maker.findById(req.params.id);
    res.json(location);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
