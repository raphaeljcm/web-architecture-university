import { Request, Response } from 'express';
import { Marker } from '../models/Marker';

export async function listAllLocations(req: Request, res: Response) {
  try {
    const marker = await Marker.find();
    res.json(marker);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
