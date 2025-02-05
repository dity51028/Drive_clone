const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes')

app.set('view engine','ejs')

app.use('/user',userRouter);
/*
app.get('/',(req,res)=>{
    //res.send('hello world');
    res.render("index")

})*/

app.get('/register',(req,res)=>{
    res.render('register');         //this route is for showing the form 
})

app.post('/register',(req,res)=>{

})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})