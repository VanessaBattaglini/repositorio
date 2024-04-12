import express from 'express';
const router = express.Router();
import pool from '../config/db.js';
import { showSongs, addSongs } from '../crud/queries.js';
import path from "path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../views/index.html');


//Ruta raíz
router.get("/", (req, res) => {
    console.log("views/index.html");
    res.sendFile("views/index.html", { root: "." })
});
//Prueba de conexión
router.get("/date", async(req, res) => {
    const results = await pool.query('SELECT NOW()');
    res.send(results.rows)
});

//Mostrar canciones
router.get("/canciones", async (req, res) => {
    const results = await showSongs();
    console.log(results.rows);
    res.json(results)
});
router.post("/cancion", async() => {
    const { titulo, artista, tono } = req.body;
    const cancion = [titulo, artista, tono];
    const results = await pool.query(addSongs);
    res.json(results)
});

router.delete('/cancion', async (req, res) => {
    
});



export default router;