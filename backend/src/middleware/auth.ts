import { RequestHandler } from 'express';
import { AUTH_TOKEN } from '../config/tokens';

export const auth: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === AUTH_TOKEN) {
    next();
  } else {
		return res.status(401).send({ message: 'authorized' });
	}
};
