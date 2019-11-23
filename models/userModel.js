const mongoose=require('mongoose');
const joi=require('joi');

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        regex:/.+\@[a-zA-Z]+\.[a-zA-Z]{3}/
    },
    userPassword:{
        type:String,
        required:true,
        regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/
    },
    userGender:{
        type:String,
        enum:['Male','Female'],
        default:'Male'
    },
    userImg:{
        type:String
    },
    create_at:{
        type:Date,
        default:Date.now()
    }
});

const User=mongoose.model('User',userSchema);


module.exports.User=User;