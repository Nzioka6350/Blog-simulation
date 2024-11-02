const express =require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs');

const database = require('./views/database');

// Route for getting all notes
app.get('/notes',(req,res)=>{
    const notes = database.getNotes();
   res.render('notes.ejs', {notes});
})

//Route for 



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})