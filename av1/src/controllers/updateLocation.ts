import { Request, Response } from 'express';
import { Marker } from '../models/Marker';

export async function updateLocation(req: Request, res: Response) {
  try {
    await Marker.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
