const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir el contenido estático de la aplicación React
app.use(express.static(path.join(__dirname, 'build')));

// Ruta para servir la aplicación React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'main.jsx'));
});

// Utilizar el puerto de la variable de entorno PORT
const PORT = process.env.PORT || 5173;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
