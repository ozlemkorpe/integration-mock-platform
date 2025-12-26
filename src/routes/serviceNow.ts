import { Router, Request, Response } from "express";

export const serviceNowRouter = Router();

// CREATE INCIDENT
serviceNowRouter.post("/incident", (req: Request, res: Response) => {
  const { shortDescription, description, urgency, impact, assignedTo } = req.body;

  const incidentNumber = `INC${Math.floor(1000000 + Math.random() * 9000000)}`;

  res.status(201).json({
    sys_id: Math.random().toString(36).substring(2, 12),
    number: incidentNumber,
    shortDescription,
    description,
    urgency: urgency ?? 3,
    impact: impact ?? 3,
    priority: calculatePriority(urgency, impact),
    state: "New",
    assignedTo,
    openedAt: new Date().toISOString(),
    source: "ServiceNow",
  });
});

// GET INCIDENT
serviceNowRouter.get("/incident/:number", (req: Request, res: Response) => {
  res.json({
    number: req.params.number,
    shortDescription: "Payment API down",
    state: "In Progress",
    urgency: 1,
    impact: 1,
    priority: 1,
    assignedTo: "itops@company.com",
  });
});

// UPDATE INCIDENT STATE
serviceNowRouter.patch("/incident/:number/state", (req: Request, res: Response) => {
  const { state } = req.body;

  res.json({
    number: req.params.number,
    state,
    updatedAt: new Date().toISOString(),
  });
});

// HEALTH
serviceNowRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ServiceNow Incident mock is running 🧯" });
});

function calculatePriority(urgency = 3, impact = 3) {
  if (urgency === 1 && impact === 1) return 1;
  if (urgency <= 2 && impact <= 2) return 2;
  return 3;
}
