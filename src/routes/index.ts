import { Router } from 'express';
import { jiraRouter } from './jira';
import { azureBoardsRouter } from './azureBoards';
import { bugzillaRouter } from './bugzilla';
import { githubRouter } from './github';
import { fogbugzRouter } from './fogbugz';
import { bitbucketRouter } from "./bitbucket";
import { gitlabRouter } from "./gitlab";
import { pagerDutyRouter } from "./pagerDuty";
import { redmineRouter } from "./redmine";
import { unfuddleRouter } from "./unfuddle";
import { shortcutRouter } from "./shortcut";
import { youtrackRouter } from "./youtrack";

export const apiRouter = Router();

apiRouter.use('/jira', jiraRouter);
apiRouter.use('/azureboards', azureBoardsRouter);
apiRouter.use('/bugzilla', bugzillaRouter);
apiRouter.use('/github', githubRouter);
apiRouter.use('/fogbugz', fogbugzRouter);
apiRouter.use("/bitbucket", bitbucketRouter);
apiRouter.use("/gitlab", gitlabRouter)
apiRouter.use("/pagerDuty", pagerDutyRouter)
apiRouter.use("/redmine", redmineRouter)
apiRouter.use("/unfuddle", unfuddleRouter)
apiRouter.use("/shortcut", shortcutRouter)
apiRouter.use("/youtrack", youtrackRouter)





