import { Router, Request, Response } from "express";

export const pivotalTrackerRouter = Router();

// CREATE STORY
pivotalTrackerRouter.post("/story", (req: Request, res: Response) => {
  const { title, description, storyType, estimate, owner } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    title,
    description,
    storyType: storyType || "feature", // feature | bug | chore
    estimate: estimate ?? 3,
    owner,
    currentState: "started",
    createdAt: new Date().toISOString(),
    projectId: 9999,
  });
});

// GET STORY
pivotalTrackerRouter.get("/story/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    title: "Checkout flow broken",
    storyType: "bug",
    estimate: 2,
    currentState: "finished",
    owner: "qa@company.com",
  });
});

// HEALTH
pivotalTrackerRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Pivotal Tracker mock is running 🚀" });
});


