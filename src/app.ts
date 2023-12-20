import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/student/user.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 13;
  res.send(a);
});

export default app;
