import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './Routers/Usuario.router'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Root server, hola ver cambios');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});