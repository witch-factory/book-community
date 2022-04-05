import express from 'express';
import cors from 'cors';
import DBConnection from './db.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user/info', async (req, res) => {
  // 글들의 정보만 가져온다(댓글 제외)
  const pool = DBConnection();
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query('select * from user_info');
    res.send(rows);
  } finally {
    conn.release();
  }
});

app.get('/board/titles', async (req, res) => {
  // 글들의 정보만 가져온다(댓글 제외)
  const pool = DBConnection();
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query('select * from free_board');
    res.send(rows);
  } finally {
    conn.release();
  }
});

app.get('/board/letter', async (req, res) => {
  // 글 하나를 댓글과 함께 가져온다
  const pool = DBConnection();
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query('select * from free_board left outer join free_board_comment on free_board.id=free_board_comment.letter_id');
    res.send(rows);
  } finally {
    conn.release();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
