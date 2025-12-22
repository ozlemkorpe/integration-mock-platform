import { Router, Request, Response } from 'express';

export const jiraRouter = Router();

/**
 * Mock: Create Jira issue
 * Endpoint: POST /rest/api/3/issue
 * Mocked as: POST /jira/issue
 */
jiraRouter.post('/issue', (req: Request, res: Response) => {
  const { fields } = req.body;

  // Basic validation (similar to real Jira behavior)
  if (!fields || !fields.summary || !fields.issuetype?.name) {
    return res.status(400).json({
      errorMessages: ['Missing required fields'],
      errors: {
        summary: 'summary is required',
        issuetype: 'issuetype.name is required'
      }
    });
  }

  res.status(201).json({
    id: '10001',
    key: 'BUG-123',
    self: 'https://mock-jira/rest/api/3/issue/10001'
  });
});
