const express = require('express');

const userRouter = require('./routes/userRoutes');
const dotENV = require('dotenv');


dotENV.config();
const connectToDB = require('./config/db');
connectToDB();


const app = express();

app.set('view engine','ejs')

app.use('/user',userRouter);
app.use(express.json);
app.use(express.urlencoded({extended:true}))
/*
app.get('/',(req,res)=>{
    //res.send('hello world');
    res.render("index")

})*/


app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})