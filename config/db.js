import pkg from 'pg';
const { Pool } = pkg;
process.loadEnvFile();
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    allowExitOnIdle: true
};
const pool = new Pool(config);

//Prueba de conxión con la DB
// const getDate = async () => {
//     const result = await pool.query('SELECT NOW()');
//     console.log(result.rows[0])
// };
// getDate();

export default pool;