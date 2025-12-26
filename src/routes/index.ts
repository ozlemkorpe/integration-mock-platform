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
import { freshServiceRouter } from "./freshService";
import { kennaRouter } from "./kenna";
import { pivotalTrackerRouter } from './pivotalTracker';
import { tfsRouter } from './tfs';
import { serviceNowRouter } from './serviceNow';
import { jazzRouter } from './jazz';
import { defectDojoRouter } from './defectDojo';

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
apiRouter.use("/freshService", freshServiceRouter)
apiRouter.use("/kenna", kennaRouter)
apiRouter.use("/pivotalTracker", pivotalTrackerRouter)
apiRouter.use("/tfs", tfsRouter)
apiRouter.use("/pivotalTracker", pivotalTrackerRouter)
apiRouter.use("/serviceNow", serviceNowRouter)
apiRouter.use("/jazz", jazzRouter)
apiRouter.use("/defectDojo", defectDojoRouter)





