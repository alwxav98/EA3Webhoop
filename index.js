const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (como imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analizar datos en formato JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Programacion Distribuida',
    university: 'Universidad Central del Ecuador',
    faculty: 'Facultad de Ingeniería y Ciencias Aplicadas',
    degree: 'Sistemas de Información',
    name: 'Tanya Alexandra Vaca Mena',
    studentId: 'SI8-002'
  });
});

// Ruta para recibir WebHooks (POST)
app.post('/webhook', (req, res) => {
  console.log('Datos recibidos:', req.body);
  
  // Aquí puedes procesar los datos del WebHook, por ejemplo:
  // - Guardar la información en la base de datos
  // - Enviar notificaciones
  // - Procesar eventos según los datos recibidos
  
  // Enviar una respuesta al servidor que envía el WebHook
  res.status(200).send('Webhook recibido');
});

// Iniciar el servidor en 0.0.0.0
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
