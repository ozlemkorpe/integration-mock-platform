import { Router, Request, Response } from "express";

export const youtrackRouter = Router();

// CREATE ISSUE
youtrackRouter.post("/issue", (req: Request, res: Response) => {
  const { summary, description, priority, project } = req.body;

  res.status(201).json({
    id: `YT-${Math.floor(Math.random() * 10000)}`,
    summary,
    description,
    project: project ?? "Mock YouTrack Project",
    priority: priority ?? "Normal",
    state: "Open",
    reporter: "mock-user@youtrack.com",
    createdAt: new Date().toISOString(),
    url: "https://youtrack.jetbrains.com/issue/YT-123",
  });
});

// GET ISSUE
youtrackRouter.get("/issue/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    summary: "Mock YouTrack Issue",
    description: "This is a mocked YouTrack issue",
    project: "Mock YouTrack Project",
    priority: "High",
    state: "In Progress",
    reporter: "mock-user@youtrack.com",
  });
});

// HEALTH CHECK
youtrackRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "YouTrack mock is running 🧠" });
});


