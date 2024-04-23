import express from 'express';
import router from './routes/router.js';
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));//Se va a mandar un objeto por un formulario
app.use('/', router);
//Hacer la carpeta de assets pública
app.use(express.static('assets'));




app.listen(PORT, () => {
console.log(`El servidor se ha levantado en el PORT http://localhost:${PORT}`)
});
