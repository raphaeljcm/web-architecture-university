import { Bank } from '../models/Bank';
import { Request, Response } from 'express';

const BankController = {
  getBanks: (req: Request, res: Response) => {
    res.render('banks', { banks: Bank() });
  },
};

export default BankController;
