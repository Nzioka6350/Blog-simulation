import mysql from 'mysql2';
import dotdev from 'dotenv';
dotdev.config;

const db = mysql.createPool({
    host: process.env.DB_HOST,
}
)