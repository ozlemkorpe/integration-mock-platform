import { Router, Request, Response } from "express";

export const bitbucketRouter = Router();

// CREATE ISSUE
bitbucketRouter.post("/issue", (req: Request, res: Response) => {
  const { title, description, priority, reporter } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    title,
    description,
    priority: priority ?? "Medium",
    status: "Open",
    reporter: reporter ?? "mock-user@bitbucket.org",
    createdAt: new Date().toISOString(),
    link: "https://bitbucket.org/mock-repo/issues/123",
  });
});

// GET ISSUE
bitbucketRouter.get("/issue/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    title: "Mock Bitbucket Issue",
    description: "This is a mocked Bitbucket issue",
    priority: "High",
    status: "Open",
    reporter: "mock-user@bitbucket.org",
  });
});

// HEALTH CHECK
bitbucketRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Bitbucket mock is running 🧡" });
});

