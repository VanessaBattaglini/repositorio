import express from 'express';
const router = express.Router();
import pool from '../config/db.js';
import { showSongs, addSongs, deleteSongs, updateSong } from "../crud/queries.js";
import path from "path";
const __dirname = import.meta.dirname;


//Ruta raíz
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});


//Prueba de conexión
router.get("/date", async(req, res) => {
    const results = await pool.query('SELECT NOW()');
    res.send(results.rows)
});

//Mostrar canciones
router.get("/canciones", async (req, res) => {
    const results = await showSongs();
    res.json(results)
});

//Insertar canciones
router.post("/cancion", async(req, res) => {
    const { titulo, artista, tono } = req.body;
    const cancion = [titulo, artista, tono];
    const results = await addSongs(cancion);
    console.log(results.rows)
    res.json(results)
});
//Borrar canciones
router.delete('/cancion', async (req, res) => {
    const { id } = req.query; //captura por url
  const result = await deleteSongs(id);
  res.send("Canción Eliminada");
});

//Editar canciones
router.put('/cancion/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = [titulo, artista, tono, id];
    const results = await updateSong(cancion);
    res.send('Cambios realizados con éxito');
});




export default router;