const { Validator } = require('node-input-validator');
const {User}=require('../models/userModel');
const mongoose=require('mongoose');
//const { check, validationResult } = require('express-validator');
const JSAlert = require("js-alert");
const express=require('express');
const session = require('express-session');
const fs=require('fs-extra');
const multer=require('multer');
const formidable = require('formidable');
const joi=require('joi');
const path=require('path');




const router=express.Router();




router.get('/',async (req,res)=>{
   res.render('SignUp');
   
});

router.get('/login',async (req,res)=>{
    res.render('Login');
 });
 

// router.post('/sign_up' ,upload.single('userImg'),async (req,res)=>{

//     var errName='';
//     var errEmail='';
//     var errPassword='';
//     var arr=[];
//     const errNameV = new Validator(req.body, {
//         txtName: 'required|string|minLength:3'
//       });
//      await errNameV.check().then((matched) => {
//         if (!matched) 
//         {
//           errName= 'UserName can not be less than 3 characters';
//          }
          
//       });

//       const errEmailV = new Validator(req.body, {
//         txtEmail: 'required|email'
//       });
//       await errEmailV.check().then((matched) => {
//         if (!matched) 
//             errEmail= 'Invalide Email address';
//       });

//       const errPasswordV = new Validator(req.body, {
//         txtPassword: 'required|string|minLength:5'

//       });
//       await errPasswordV.check().then((matched) => {
//         if (!matched) 
//             errPassword= 'password can not be less than 5 characters ';
//       });


//       if(errEmail !='' || errName !='' || errPassword!='')
//       {
//         await res.render('SignUp',{errEmail,errName,errPassword});
//       }
//       var imagePath = req.file.path.replace(/^public\//, '');
//       console.log(imagePath);
      // else
      // {
      //     const user=new User({
      //       userName:req.body.txtName,
      //       userEmail:req.body.txtEmail,
      //       userPassword:req.body.txtPassword,
      //       userGender:req.body.txtGender,
      //       userImg:path.dirname(req.body.user_img)
      //       });
      //    const result= await user.save();
      //    if(!result) return console.log('Error');
      //    await res.render('signup_success');
      // }

   
//});

router.post('/login',async (req,res)=>{
    var err='';
    const email=req.body.txtEmail2;
    const password=req.body.txtPassword2;
     const user=await User.findOne({userEmail:email,userPassword:password});
    if(!user){

      res.render('Login',{err:'Email or Password not correct'});
    }
    else
    {
        const userName=await User.findOne({userEmail:email,userPassword:password}).select({userName:1,_id:0});
        const userName2=userName.userName;
        res.render('home',{userName2});
    }
    
})
module.exports=router;