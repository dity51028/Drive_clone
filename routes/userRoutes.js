const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const userModel = require('../models/user.model');

router.get('/test',(req,res)=>{
    res.send('user router created');
})

router  .get('/register',(req,res)=>{
    res.render('register');         //this route is for showing the form 
})


router.post('/register',
    body('email').trim().isEmail().isLength({min:13}),
    body('username').trim().isLength({min:3}),
    body('password').trim().isLength({min:5}),
    (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        // return res.send('Invalid data');
        return res.status(400).json({
            errors:errors.array(),
            message:'data is not valid'
        })
    }

    const {email,username,password} = req.body;

    const newUser = userModel.create({
        email,
        username,
        password
    })

    res.json(newUser);

    console.log(errors);
    console.log(req.body);
   // res.send(errors);
})

module.exports = router;