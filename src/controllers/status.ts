import {Request, Response} from 'express';

export let hi = (req: Request, res: Response) => {
    res.send("Hello Everyone from the controller");
}

export let awesome = (req: Request, res: Response) => {
    res.send("Everyting is Going Good. Fun to Learn");
}