import { Router, Request, Response } from "express";

export const shortcutRouter = Router();

// CREATE STORY
shortcutRouter.post("/story", (req: Request, res: Response) => {
  const { name, description, story_type, estimate, project } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    name,
    description,
    story_type: story_type ?? "bug", // feature | bug | chore
    estimate: estimate ?? 1,
    workflow_state: "unstarted",
    project: project ?? "Mock Shortcut Project",
    owner: "mock-user@shortcut.com",
    created_at: new Date().toISOString(),
    app_url: "https://app.shortcut.com/mock/story/123",
  });
});

// GET STORY
shortcutRouter.get("/story/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    name: "Mock Shortcut Story",
    description: "This is a mocked Shortcut story",
    story_type: "bug",
    estimate: 2,
    workflow_state: "started",
    owner: "mock-user@shortcut.com",
  });
});

// HEALTH
shortcutRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Shortcut mock is running 🚀" });
});

export default Router;
