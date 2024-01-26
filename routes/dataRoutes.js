// File: routes/dataRoutes.js
import express from 'express';
import dataController from '../controllers/dataController.js';

const router = express.Router();

router.get('/', dataController.getData);

export default router;
