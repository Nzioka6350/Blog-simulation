import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

//Establish database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).promise()

//Function to get all notes
export async function getNotes()
{
    const [rows] = await db.query('SELECT * FROM notes');
    return rows
}

//Function to get one note
export async function getNote(id)
{
    const [rows] = await db.query(`
        SELECT * FROM notes
        WHERE id = ?
        `,[id])
    return rows;

}
// Function to insert into the table
export async function createNote(title,content)
{
    const [rows] = await db.query(
        `
        INSERT INTO notes(title,content)
        VALUES(?,?)
        `,[title,content]
    )
    return{
        id:rows.insertId,
        title,
        content
    }
}

export async function deleteNote(id)
{
try{
    const [rows] = await db.query(
        `
        DELETE FROM notes
        WHERE id = ?
        `,[id]
    )
    if(rows.affectedRows === 0)
    {
        return{ message: "ID not found"}
    }
    return {message:" Note successfully deleted"}
    }catch(error){
    console.error("Errors",error)
    return {message: "Error deleting note", error: error.message};
}
}

//Test
const note = await deleteNote(10);
console.log(note)