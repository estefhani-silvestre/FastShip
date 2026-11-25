const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => console.log('Error al conectar a MongoDB:', error));

const envioRoutes = require('./routes/envio.route');
app.use('/api/envios', envioRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor ejecutándose en el puerto '+ PORT);
});