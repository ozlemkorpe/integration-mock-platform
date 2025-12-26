import { Router, Request, Response } from "express";

export const jazzRouter = Router();

// CREATE WORK ITEM
jazzRouter.post("/workitem", (req: Request, res: Response) => {
  const { title, description, type, severity, priority, owner } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    title,
    description,
    type: type || "Defect", // Defect | Task | Story
    state: "New",
    severity: severity ?? "Medium",
    priority: priority ?? 3,
    owner,
    createdAt: new Date().toISOString(),
    projectArea: "EnterpriseProject",
    source: "Jazz Team Server (RTC)",
  });
});

// GET WORK ITEM
jazzRouter.get("/workitem/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    title: "Invoice batch fails",
    type: "Defect",
    state: "In Progress",
    severity: "High",
    priority: 1,
    owner: "dev@company.com",
  });
});

// UPDATE STATE
jazzRouter.patch("/workitem/:id/state", (req: Request, res: Response) => {
  const { state } = req.body;

  res.json({
    id: req.params.id,
    state,
    updatedAt: new Date().toISOString(),
  });
});

// HEALTH
jazzRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Jazz Team Server mock is running 🎷" });
});
