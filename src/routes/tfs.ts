import { Router, Request, Response } from "express";

// TFS- Replaced by AzureBoards but still uses old endpoints on onpremise
export const tfsRouter = Router();

// CREATE WORK ITEM
tfsRouter.post("/workitem", (req: Request, res: Response) => {
  const { title, description, type, assignedTo, priority } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    title,
    description,
    type: type || "Bug", // Bug | Task | User Story
    state: "New",
    priority: priority ?? 2,
    assignedTo,
    createdDate: new Date().toISOString(),
    areaPath: "DefaultProject\\QA",
    iterationPath: "Sprint 1",
    source: "TFS",
  });
});

// GET WORK ITEM
tfsRouter.get("/workitem/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    title: "Checkout page crash",
    type: "Bug",
    state: "Active",
    priority: 1,
    assignedTo: "dev@company.com",
  });
});

// HEALTH
tfsRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "TFS mock is running 🧱" });
});
