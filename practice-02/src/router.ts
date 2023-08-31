import { Router } from 'express';
import { listMovies } from './controllers/listMovies';
import { createMovie } from './controllers/createMovie';
import { deleteMovie } from './controllers/deleteMovie';
import { updateWholeMovie } from './controllers/updateWholeMovie';
import { updateItemMovie } from './controllers/updateItemMovie';

export const router = Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/movies', listMovies);

router.post('/movies', createMovie);

router.put('/movies/:id', updateWholeMovie);

router.patch('/movies/:id', updateItemMovie);

router.delete('/movies/:id', deleteMovie);
