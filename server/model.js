const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getTable = () => {
    return new Promise( function(res, rej) {
        pool.query('SELECT * FROM test_table', (error, results) => {
            if (error) {
                rej(error);
            }
            res(results.rows);
        });
    });
}

module.exports = {
    getTable
}