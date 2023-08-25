import BankController from '../controllers/BankController';
import { Router } from 'express';

export const banksRouter = Router();

banksRouter.get('/', BankController.getBanks);
