import express from 'express';
const router = express.Router();



//Ruta raíz
router.get("/", (req, res) => {
    res.send("Welcome");
});


export default router;