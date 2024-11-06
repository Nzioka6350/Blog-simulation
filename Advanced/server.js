import express from 'express';
const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');
import {getNotes,getNote,createNote,deleteNote} from './database.js'




app.listen(port,()=>{
    console.log("Application running on port",{port})
})