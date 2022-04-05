import express from 'express';
import DBConnection from './db.js';

const app = express();
const port = 8000;

app.get('/', async (req, res) => {
  const pool = DBConnection();
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query('select * from free_board');
    res.send(rows);
  } finally {
    conn.release();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
