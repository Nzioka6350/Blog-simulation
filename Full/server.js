import express from 'express';
const app = express();
const port = 3000;
app.set('view engine','ejs')
app.use(express.static('public'))
//Start of codes
app.get('/auth/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/auth/register',(req,res)=>{
    res.render('register.ejs')
})
app.post('/auth/signup',(req,res)=>{

})


//listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})