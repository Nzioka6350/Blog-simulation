import express from 'express';
const app = express();
const port = 3000;
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
//Start of codes
app.get('/auth/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/auth/register',(req,res)=>{
    res.render('register.ejs')
})
app.post('/auth/signup',async (req,res)=>{
    const {username,email,password} = req.body; 
    try{
        const user = await createUser(username,email,password)
        res.redirect('/auth/login')
    }catch(err){
        res.status(400).send({message:err.message})
    }

})


//listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})