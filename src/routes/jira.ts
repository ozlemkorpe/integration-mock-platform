import { Router, Request, Response } from 'express';

export const jiraRouter = Router();

jiraRouter.post('/issue', (req: Request, res: Response) => {
  res.status(201).json({
    id: '10001',
    key: 'BUG-123',
    self: 'http://mock-jira/rest/api/3/issue/10001'
  });
});
