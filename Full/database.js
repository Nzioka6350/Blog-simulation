import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
}
)

export function getUser(id)
{

}
export async function createUser(username,email,password){
    const [rows] = await db.query(`
        INSERT INTO users(username,email,password) VALUES(?,?,?)
        `,[username,email,password])
        return rows;
}
export function getAllUsers()
{

}
export function getNote(id)
{

}
export function getNotes()
{

}
export function createNote()
{

}