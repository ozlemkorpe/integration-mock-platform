import { Router, Request, Response } from "express";

export const kennaRouter = Router();

// CREATE VULNERABILITY
kennaRouter.post("/vulnerability", (req: Request, res: Response) => {
  const { asset, cve, severity, description } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    asset,
    cve,
    severity,
    riskScore: calculateRisk(severity),
    status: "Open",
    description,
    detectedAt: new Date().toISOString(),
    source: "Kenna Scanner",
  });
});

// GET VULNERABILITY
kennaRouter.get("/vulnerability/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    asset: "api-server-01",
    cve: "CVE-2024-12345",
    severity: "Critical",
    riskScore: 92,
    status: "Open",
  });
});

// CREATE ASSET
kennaRouter.post("/asset", (req: Request, res: Response) => {
  const { hostname, ip, owner, environment } = req.body;

  res.status(201).json({
    id: Math.floor(Math.random() * 100000),
    hostname,
    ip,
    owner,
    environment,
    riskScore: Math.floor(Math.random() * 100),
    lastSeen: new Date().toISOString(),
  });
});

// HEALTH CHECK
kennaRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Kenna mock is secure 🔐" });
});

// simple risk logic
function calculateRisk(severity: string) {
  switch (severity) {
    case "Critical":
      return 95;
    case "High":
      return 80;
    case "Medium":
      return 55;
    default:
      return 20;
  }
}
