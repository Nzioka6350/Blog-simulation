import express from 'express';
const app = express();
const port = 3000;
app.set('view engine','ejs')

//Start of codes
app.get('/auth/login',(req,res)=>{
    res.render('login.ejs')
})




//listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})