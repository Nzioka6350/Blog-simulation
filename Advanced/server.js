import express from 'express';

const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');


async function getNotes(){
    const [rows] = await  pool.query("SELECT * FROM notes");
    return rows
}
async function getNote(id){
    const [rows] = await pool.query(
        `
        SELECT * FROM notes
         WHERE id = ?
        `,[id]
    )
    return rows[0];
}
const note = await getNote(4);
console.log(note);
async function createNote(title,content){
    const [rows] = await pool.query(
        `
        INSERT INTO notes(title,content)
        VALUES(?,?)
        `,[title,content]
    )
    return rows;
}
const noted = await createNote("James","Test test");
console.log(noted)

app.listen(port,()=>{
    console.log("Application running on port",{port})
})