const express =require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})