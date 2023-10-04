import { Request, Response } from 'express';
import { Marker } from '../models/Marker';

export async function createLocation(req: Request, res: Response) {
  try {
    const location = await Marker.create(req.body);
    res.json(location);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
