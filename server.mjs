import express from 'express';
import { obtenerSuperheroeController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresA30Controller } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get('/superheroes/id/:id', obtenerSuperheroeController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresA30Controller);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});