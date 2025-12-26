import { Router, Request, Response } from "express";

export const pagerDutyRouter = Router();

// CREATE INCIDENT
pagerDutyRouter.post("/incident", (req: Request, res: Response) => {
  const { title, description, severity, service } = req.body;

  res.status(201).json({
    incidentId: `PD-${Math.floor(Math.random() * 100000)}`,
    title,
    description,
    severity: severity ?? "critical",
    status: "triggered",
    service: service ?? "mock-service",
    createdAt: new Date().toISOString(),
    escalationLevel: 1,
  });
});

// GET INCIDENT
pagerDutyRouter.get("/incident/:id", (req: Request, res: Response) => {
  res.json({
    incidentId: req.params.id,
    title: "Mock PagerDuty Incident",
    description: "Service is not responding",
    severity: "critical",
    status: "acknowledged",
    service: "mock-service",
    escalationLevel: 2,
  });
});

// HEALTH CHECK
pagerDutyRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "PagerDuty mock is running 🚨" });
});


