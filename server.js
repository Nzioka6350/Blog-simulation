const express =require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}))

const database = require('./views/database');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})
connection.connect((err)=>{
    if(err)
    {
        throwerr;
    }
    console.log("Successfully connected to the database.")
})
connection.query('SELECT * FROM users WHERE id = 1',(error,result)=>{
    if(error)
        {
            console.log(err);
        }
        console.log(result);
})

  //Route to get all users
app.get('/',(req,res)=>{
    connection.query('SELECT * FROM users WHERE id = 1',(err,result)=>{
        if(err)
        {
            console.error(err);
            return res.json({message: "There was an issue"})
        }
        res.json(result)
    })
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