const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MAKUENIkenya2001',
    database: 'mydb'
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack)
      return
    }
    console.log('Connected to the database as ID', connection.threadId)
  })
  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
  })

  connection.end();