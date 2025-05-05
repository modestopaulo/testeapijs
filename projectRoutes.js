import express from 'express';

const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
  res.send('Project routes');
});

export default router;