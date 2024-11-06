import express from 'express';
import mysql from 'mysql2';
import dotenv  from "dotenv"
dotenv.config();
const app = express();
const port = 3000;

//Database connection test
const pool =mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
    
}).promise()


const result = await pool.query("SELECT * FROM notes")
console.log(result)

// app.get('/',(req,res)=>{

// })



app.listen(port,()=>{
    console.log("Application running on port",{port})
})