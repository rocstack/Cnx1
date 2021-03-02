import { RequestHandler } from 'express';

export const getTime: RequestHandler = (req, res, next) => {
  res.json({ epoch: Math.round(Date.now() / 1000) });
};
