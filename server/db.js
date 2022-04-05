import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectionInfo = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 500,
};

function DBConnection() {
  let DBPool;
  try {
    DBPool = mysql.createPool(connectionInfo);
  } catch (err) {
    console.log(err);
  }
  return DBPool;
}

export default DBConnection;
