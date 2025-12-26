import { Router, Request, Response } from 'express';

export const githubRouter = Router();

/**
 * Mock: Create GitHub Issue
 * Real API:
 * POST /repos/{owner}/{repo}/issues
 *
 * Mocked as:
 * POST /github/issues
 */
githubRouter.post('/issues', (req: Request, res: Response) => {
  const { title, body, labels, assignees } = req.body;

  // GitHub-style validation
  if (!title) {
    return res.status(422).json({
      message: 'Validation Failed',
      errors: [
        {
          resource: 'Issue',
          field: 'title',
          code: 'missing_field'
        }
      ]
    });
  }

  res.status(201).json({
    id: 345678,
    number: 42,
    title,
    body: body || '',
    state: 'open',
    labels: labels || [],
    assignees: assignees || [],
    html_url: 'https://github.com/mock-org/mock-repo/issues/42',
    created_at: new Date().toISOString()
  });
});
