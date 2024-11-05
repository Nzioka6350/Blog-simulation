const express =require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}))

const database = require('./views/database');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MAKUENIkenya2002',
    database: 'mydb'
})
connection.connect()

connection.end();

  //Route to get all users
app.get('/',(req,res)=>{

})

// Route for getting all notes
app.get('/notes',(req,res)=>{
    const search = req.query.search;
    const notes = database.getNotes(search);
   res.render('notes.ejs', {notes});
})

//Route for single post
app.get('/notes/:id',(req,res)=>{
    const id = +req.params.id;
    const note = database.getNote(id)
   
    if(!note)
    {
        res.render("notFound.ejs")
    }
    res.render("singleNote.ejs",{note})

})

//Route to get form to create note
app.get('/newNote',(req,res)=>{
    res.render('createnote.ejs')
})

//Route to post new note
app.post('/addNote',(req,res)=>{
    const data = req.body;
    database.addNote(data);
    res.redirect("/notes")
})

//Route to delete specific note
app.post('/note/:id/delete',(req,res)=>{
    const id = +req.params.id;
    database.deleteNote(id);
    res.redirect('/notes')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})