import express from 'express';
import cors from 'cors';
import {
  createDomain,
  validateDomain,
} from './domain/domain.controller.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.post('/domains', createDomain);
app.get('/domains/:name', validateDomain);
