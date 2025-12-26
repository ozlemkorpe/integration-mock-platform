import { Router, Request, Response } from "express";

export const gitlabRouter = Router();

// CREATE ISSUE
gitlabRouter.post("/issue", (req: Request, res: Response) => {
  const { title, description, labels, assignee } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    iid: Math.floor(Math.random() * 1000), // GitLab’e özgü
    title,
    description,
    state: "opened",
    labels: labels ?? [],
    assignee: assignee ?? "mock-user@gitlab.com",
    created_at: new Date().toISOString(),
    web_url: "https://gitlab.com/mock-group/mock-project/-/issues/1",
  });
});

// GET ISSUE
gitlabRouter.get("/issue/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    iid: 42,
    title: "Mock GitLab Issue",
    description: "This is a mocked GitLab issue",
    state: "opened",
    labels: ["bug", "backend"],
    assignee: "mock-user@gitlab.com",
  });
});

// HEALTH CHECK
gitlabRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "GitLab mock is running 🦊" });
});

