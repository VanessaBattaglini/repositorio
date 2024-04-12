import express from 'express';
import router from './routes/router.js';
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use('/', router);




app.listen(PORT, () => {
console.log(`El servidor se ha levantado en el PORT http://localhost:${PORT}`)
});
