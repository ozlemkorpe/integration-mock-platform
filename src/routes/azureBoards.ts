import { Router, Request, Response } from 'express';

export const azureBoardsRouter = Router();

/**
 * Mock: Create Azure Boards work item
 * Endpoint: POST https://dev.azure.com/{org}/{project}/_apis/wit/workitems/${type}?api-version=7.0
 * Mocked as: POST /azureboards/workitems
 */

azureBoardsRouter.post('/workitems', (req: Request, res: Response) => {
  const { title, description, type } = req.body;

  // Validation
  if (!title) {
    return res.status(400).json({
      message: 'Title is required'
    });
  }

  res.status(201).json({
    id: 5678,
    rev: 1,
    fields: {
      'System.Title': title,
      'System.Description': description || '',
      'System.WorkItemType': type || 'Bug',
      'System.State': 'New'
    },
    url: 'https://dev.azure.com/mock-org/mock-project/_workitems/edit/5678'
  });
});
