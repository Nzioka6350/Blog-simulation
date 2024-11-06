import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2'
dotenv.config();
const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

}).promise()

async function getNotes(){
    const [rows] = await  pool.query("SELECT * FROM notes");
    return rows
}

const notes = await getNotes();
console.log(notes);



app.listen(port,()=>{
    console.log("Application running on port",{port})
})