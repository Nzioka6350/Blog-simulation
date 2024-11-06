import express from 'express';
import mysql from 'mysql2';
const app = express();
const port = 3000;





app.listen(port,()=>{
    console.log("Application running on port",{port})
})