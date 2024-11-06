import express from 'express';
const app = express();
const port = process.env.PORT  | 3000
app.set('view engine', 'ejs');





app.listen(port,()=>{
    console.log("Application running on port",{port})
})