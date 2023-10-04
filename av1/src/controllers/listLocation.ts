import { Request, Response } from 'express';
import { Marker } from '../models/Marker';

export async function listLocation(req: Request, res: Response) {
  try {
    const location = await Marker.findById(req.params.id);
    res.json(location);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
