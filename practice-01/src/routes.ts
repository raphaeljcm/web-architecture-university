import { Router } from 'express';
import BankController from './controllers/BankController';

export const router = Router();

router.get('/banks', BankController.getBanks);
