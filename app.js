const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

//Middleware para JSON
app.use(express.json());

//Inicializa o CORS
app.use(cors()); 

//Rotas
app.use('/api', userRoutes); //Rota para autenticação

//Exporta o app para ser usado no server.js
module.exports = app;

