require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Simples rota de teste
app.get('/', (req, res) => {
  res.send('Backend Connect Contabilidade rodando 🚀');
});

// TODO: Implementar rotas WhatsApp API e Upload Backblaze

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Backend rodando na porta ${port}`));
