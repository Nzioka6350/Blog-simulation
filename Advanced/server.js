import express from 'express';
const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');
app.use(express.static('Public'))
import {getNotes,getNote,createNote,deleteNote} from './database.js'

//Route for all notes
app.get('/notes', async(req,res)=>{
    const notes = await getNotes();
    res.render('Allnotes.ejs',{notes})
})
//Route for single note

//Route for Inserting Note

//Route for Deleting Note


app.listen(port,()=>{
    console.log("Application running on port",{port})
})