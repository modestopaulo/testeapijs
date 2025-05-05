import express from 'express';
import { register, login } from '../controllers/userController.js';

const router = express.Router();

// Rota para registro de usuário
router.post('/register', register);
router.put('/register', register);

export default router;