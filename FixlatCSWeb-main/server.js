import express from 'express';
import path from 'path';

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(process.cwd(), 'dist')));

// Ruta para la aplicación React
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

// Utiliza el puerto de la variable de entorno o un puerto predeterminado
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
