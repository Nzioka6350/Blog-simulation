import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

//Establish database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).promise()

export async function getNotes()
{
    const [rows] = await db.query('SELECT * FROM notes');
    return rows
}

export async function getNote(id)
{
    const note = await db.query(`
        SELECT * FROM notes
        WHERE id = ?
        `,[id])
}