import express from 'express';
import { apiRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/', apiRouter);

app.listen(4000, () => {
  console.log('🚀 Mock server running on http://localhost:4000');
});
