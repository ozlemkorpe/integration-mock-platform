import { Router } from 'express';
import { jiraRouter } from './jira';
import { azureBoardsRouter } from './azureBoards';
import { bugzillaRouter } from './bugzilla';
import { githubRouter } from './github';
import { fogbugzRouter } from './fogbugz';

export const apiRouter = Router();



apiRouter.use('/jira', jiraRouter);
apiRouter.use('/azureboards', azureBoardsRouter);
apiRouter.use('/bugzilla', bugzillaRouter);
apiRouter.use('/github', githubRouter);
apiRouter.use('/fogbugz', fogbugzRouter);





