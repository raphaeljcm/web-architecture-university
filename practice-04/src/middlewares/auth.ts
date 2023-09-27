import jwt from 'jsonwebtoken'; 
import fs from 'node:fs';
import path from 'node:path'
import { NextFunction, Request, Response } from 'express';

const dirname = path.resolve()

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

  const publicKey = fs.readFileSync(path.join(dirname) + '/public.key', 'utf8');

  jwt.verify(token, publicKey, (err, decoded) => {
    if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });
    
    next();
  });
}