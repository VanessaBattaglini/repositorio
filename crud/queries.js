import pool from '../config/db.js';

//Prueba de conxión con la DB
// const getDate = async () => {
//     const result = await pool.query('SELECT NOW()');
//     console.log(result.rows[0])
// };

//Consultar canciones
const showSongs = async () => {
    try {
        const sql = {
            text: 'SELECT * FROM repositorio'
    }
        const response = await pool.query(sql);
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

//Crear registro de canciones
const addSongs = async (cancion) => {
    try {
        const sql = {
            text: 'INSERT INTO canciones (titulo, aritista, tono) VALUES ($1, $2, $3) RETURNING *',
            values: cancion
        };
        const results = await pool.query(sql);
        console.log('Registro ingresado con éxito', results.rows[0])
    } catch (error) {
        console.log(error.message)
    }
};

const deleteSongs = async (id) => {
  try {
    const sql = {
      text: "DELETE * FROM canciones WHERE id= $1 RETURNING *",
      values: [id],
    };
    const results = await pool.query(sql);
    console.log("Registro borrado con éxito", results.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};


export {
    showSongs,
    addSongs
}