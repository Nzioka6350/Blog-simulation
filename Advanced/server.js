import express from 'express';
import bodyParser from 'body-parser'
const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');
app.use(express.static('Public'))
import {getNotes,getNote,createNote,deleteNote} from './database.js'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//Route for all notes
app.get('/notes', async(req,res)=>{
    const notes = await getNotes();
    res.render('Allnotes.ejs',{notes})
})
//Route for single note
app.get('/notes/:id', async(req,res)=>{
    const id = Number(req.params.id);
    if(isNaN(id))
    {
            return res.status(400).json({message:"Invalid format"})
    }
    try{
        const note = await getNote(id);
        if(!note)
        {
            return res.status(404).render("Notfound.ejs")
        }
        res.render("Singlenote.ejs",{note})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
    
    
})
//Route to get creating note form
app.get('/createNew',(req,res)=>{
    res.render('Newnote.ejs')
})
//Route for Inserting Note
app.post('/newNote', async (req,res)=>{
    const {title,content} = req.body;
    try{
        const note = await createNote(title,content);
        res.redirect('/notes')
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
    }
})
//Route for Deleting Note
app.post('/note/:id/delete', async(req,res)=>{
    const id = +req.params.id;
    if(isNaN(id))
        {
            return res.status(400).json({message:"Invalid format"})
        }
    try{
       const note = await deleteNote(id);
    res.redirect('/notes')
    }catch(err){
        console.log(err)
    }
})

app.listen(port,()=>{
    console.log("Application running on port",{port})
})