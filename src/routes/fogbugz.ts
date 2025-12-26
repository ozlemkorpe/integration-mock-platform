import { Router, Request, Response } from "express";

export const fogbugzRouter = Router();

// CREATE CASE
fogbugzRouter.post("/case", (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  res.status(201).json({
    caseId: Math.floor(Math.random() * 100000),
    title,
    description,
    priority: priority ?? "Normal",
    status: "Open",
    assignedTo: "mock-user@fogbugz.com",
    createdAt: new Date().toISOString(),
  });
});

// GET CASE
fogbugzRouter.get("/case/:id", (req: Request, res: Response) => {
  res.json({
    caseId: req.params.id,
    title: "Mock FogBugz Bug",
    description: "This is a mocked FogBugz case",
    priority: "High",
    status: "Active",
    assignedTo: "mock-user@fogbugz.com",
  });
});

// HEALTH CHECK
fogbugzRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "FogBugz mock is running 🐞" });
});

export default Router;
