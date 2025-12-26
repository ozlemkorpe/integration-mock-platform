import { Router, Request, Response } from 'express';

export const bugzillaRouter = Router();

/**
 * Real API:  POST /rest/bug
 * Mocked: POST /bugzilla/bug
 */
bugzillaRouter.post('/bug', (req: Request, res: Response) => {
  const { summary, description, product, component, severity } = req.body;

  // Basic validation (follows Bugzilla rules)
  if (!summary || !product || !component) {
    return res.status(400).json({
      error: true,
      message: 'summary, product and component are required'
    });
  }

  res.status(201).json({
    id: 9001,
    summary,
    product,
    component,
    severity: severity || 'normal',
    status: 'NEW',
    web_url: 'https://bugzilla.mock/show_bug.cgi?id=9001'
  });
});
