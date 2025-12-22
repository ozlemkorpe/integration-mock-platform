import express from 'express';
import { jiraRouter } from './routes/jira';

const app = express();
app.use(express.json());

app.use('/jira', jiraRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Mock server running on http://localhost:${PORT}`);
});
