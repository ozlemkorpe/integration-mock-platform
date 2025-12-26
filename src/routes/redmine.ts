import { Router, Request, Response } from "express";

export const redmineRouter = Router();

// CREATE ISSUE
redmineRouter.post("/issue", (req: Request, res: Response) => {
  const { subject, description, priority, project } = req.body;

  res.status(201).json({
    issue: {
      id: Math.floor(Math.random() * 100000),
      project: {
        name: project ?? "Mock Project",
      },
      subject,
      description,
      priority: priority ?? "Normal",
      status: "New",
      author: "mock-user@redmine.org",
      created_on: new Date().toISOString(),
    },
  });
});

// GET ISSUE
redmineRouter.get("/issue/:id", (req: Request, res: Response) => {
  res.json({
    issue: {
      id: req.params.id,
      project: {
        name: "Mock Project",
      },
      subject: "Mock Redmine Issue",
      description: "This is a mocked Redmine issue",
      priority: "High",
      status: "In Progress",
      author: "mock-user@redmine.org",
    },
  });
});

// HEALTH CHECK
redmineRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Redmine mock is running 🧱" });
});

export default Router;
