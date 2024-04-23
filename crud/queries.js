import pool from '../config/db.js';

//Mostrar las canciones
const showSongs = async () => {
    try {
        const sql = {
            text: 'SELECT * FROM canciones'
        }
        const response = await pool.query(sql);
        console.log(response.rows);
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
};

//Crear registro de canciones
const addSongs = async (cancion) => {
    try {
        const sql = {
            text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
            values: cancion
        };
        const results = await pool.query(sql);
        console.log('Registro ingresado con éxito', results.rows)
        return results.rows;
    } catch (error) {
        console.log(error.message)
    }
};

const deleteSongs = async (id) => {
  try {
    const sql = {
      text: "DELETE  FROM canciones WHERE id= $1 RETURNING *",
      values: [id],
    };
      const results = await pool.query(sql);
      console.log("Registro borrado con éxito");
      if (results.rowCount == 0) {
          throw new Error("Canción no encontrada");
      }
      return response.rows;
  } catch (error) {
    console.log(error.message);
  }
};

//Editar las canciones

const updateSong = async (cancion) => {
    try {
    const sql = {
        text: 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 WHERE id=$4 RETURNING *',
        values: cancion
    }
    const results = await pool.query(sql);
    return results.rows;
} catch (error) {
    console.log(error.message)
}
};



export { showSongs, addSongs, deleteSongs, updateSong  };