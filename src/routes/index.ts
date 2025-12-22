import { Router } from 'express';
import { jiraRouter } from './jira';
import { azureBoardsRouter } from './azureBoards';

export const apiRouter = Router();

apiRouter.use('/jira', jiraRouter);
apiRouter.use('/azureboards', azureBoardsRouter);
