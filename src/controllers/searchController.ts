import { Request, Response } from 'express';

export const homePage = (req: Request, res: Response) => {
  res.send('Bem-vindo ao Canil');
};

export const search = (req: Request, res: Response) => {
  const query = req.query.q;
  res.send(`Você pesquisou por: ${query}`);
};