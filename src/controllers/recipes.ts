import { Router, Response, Request, NextFunction } from 'express';

// TODO:  Json Web Token Impot

const recipesRouter = Router();

recipesRouter.get('/', (req: Request, res: Response) => {

    res.send('recetas');

});


export default recipesRouter;
