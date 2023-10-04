import { Router } from 'express';
import { listAllLocations } from './controllers/listAllLocations';
import { listLocation } from './controllers/listLocation';
import { createLocation } from './controllers/createLocation';
import { updateLocation } from './controllers/updateLocation';
import { deleteLocation } from './controllers/deleteLocation';

export const router = Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/location', listAllLocations);

router.get('/location/:id', listLocation);

router.post('/newlocation', createLocation);

router.put('/updatelocation/:id', updateLocation);

router.delete('/deletelocation/:id', deleteLocation);
