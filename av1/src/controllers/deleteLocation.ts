import { Request, Response } from 'express';
import { Marker } from '../models/Marker';

export async function deleteLocation(req: Request, res: Response) {
  try {
    await Marker.findByIdAndDelete(req.params.id);
    res.send('Location deleted');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
