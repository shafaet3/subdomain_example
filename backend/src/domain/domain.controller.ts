import type { Request, Response } from 'express';
import { DomainService } from './domain.service.js';

const service = new DomainService();

export const createDomain = (req: Request, res: Response) => {
  try {
    service.create(req.body.name);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const validateDomain = (req: Request, res: Response) => {
  res.json({
    valid: service.validate(req.params.name),
  });
};
