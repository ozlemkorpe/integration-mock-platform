import { Router, Request, Response } from "express";

export const unfuddleRouter = Router();

// CREATE TICKET
unfuddleRouter.post("/ticket", (req: Request, res: Response) => {
  const { title, description, priority, project } = req.body;

  res.status(201).json({
    ticket: {
      id: Math.floor(Math.random() * 100000),
      project: project ?? "Mock Unfuddle Project",
      title,
      description,
      priority: priority ?? "Normal",
      status: "New",
      reporter: "mock-user@unfuddle.com",
      created_at: new Date().toISOString(),
    },
  });
});

// GET TICKET
unfuddleRouter.get("/ticket/:id", (req: Request, res: Response) => {
  res.json({
    ticket: {
      id: req.params.id,
      project: "Mock Unfuddle Project",
      title: "Mock Unfuddle Ticket",
      description: "This is a mocked Unfuddle ticket",
      priority: "High",
      status: "Accepted",
      reporter: "mock-user@unfuddle.com",
    },
  });
});

// HEALTH
unfuddleRouter.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "Unfuddle mock is running 🧩" });
});

export default Router;
