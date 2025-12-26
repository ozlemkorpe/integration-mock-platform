import { Router, Request, Response } from "express";

export const defectDojoRouter = Router();

// IMPORT SCAN
defectDojoRouter.post("/import-scan", (req: Request, res: Response) => {
  const { scanType, findings } = req.body;

  res.status(201).json({
    testId: Math.floor(Math.random() * 100000),
    scanType,
    findingsImported: findings?.length || 1,
    status: "Success",
    importedAt: new Date().toISOString(),
    source: "DefectDojo",
  });
});

// GET FINDING
defectDojoRouter.get("/finding/:id", (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    title: "SQL Injection",
    severity: "High",
    status: "Open",
    cwe: 89,
    cvss: 8.7,
    discoveredAt: new Date().toISOString(),
  });
});

// HEALTH
defectDojoRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "DefectDojo mock is ingesting findings 🛡️" });
});
