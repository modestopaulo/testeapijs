import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'; // Certifique-se de importar as rotas
import sequelize from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Registre as rotas de usuários
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});