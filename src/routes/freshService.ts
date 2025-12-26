import { Router, Request, Response } from "express";

export const freshServiceRouter = Router();

// CREATE TICKET
freshServiceRouter.post("/ticket", (req: Request, res: Response) => {
  const { subject, description, priority, requester } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    subject,
    description,
    priority: priority ?? "Medium",
    status: "Open",
    requester: requester ?? "user@company.com",
    agent: null,
    createdAt: new Date().toISOString(),
    source: "Portal",
  });
});

// GET TICKET
freshServiceRouter.get("/ticket/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    subject: "Mock Freshservice Ticket",
    description: "VPN connection issue",
    priority: "High",
    status: "In Progress",
    requester: "employee@company.com",
    agent: "it.support@company.com",
  });
});

// UPDATE TICKET
freshServiceRouter.put("/ticket/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    ...req.body,
    updatedAt: new Date().toISOString(),
  });
});

// HEALTH CHECK
freshServiceRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Freshservice mock is alive 🛠️" });
});

