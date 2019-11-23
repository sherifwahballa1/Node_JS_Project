var path = require('path');
const mongoose=require('mongoose');
const express=require('express');
const bodyParser = require('body-parser');
const joi=require('joi');
var hbs = require('hbs');
const session = require('express-session');
const userRouter=require('./routers/userRouter');
const multer=require('multer');
const fileUpload = require("express-fileupload");


const app=express();
const MONGO_URL=process.env.MONGO_URL || 'mongodb://localhost/Blog';
mongoose.connect(`${MONGO_URL}`)
.then(()=>console.log('Connection to Databse Blog...'))
.catch(err=>console.log('Connection Failed...'));

// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs')

// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'));
hbs.registerPartials(__dirname + '/views/partials');



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });
  
  var upload = multer({ storage: storage });

app.post('/sign_up' ,upload.single('userImg'),function (req,res){
     // var imagePath = req.file.path.replace(/^public\//, '');
      console.log(req.body.txtName);
    });
app.use('/',userRouter);

app.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) res.status(500).send(err.message);
    else next(err);
  });

const PORT=process.env.PORT||3000;
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Starting server on port ${PORT}`);
    }else{
        console.log(err);
    }
});