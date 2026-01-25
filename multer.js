const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

//this js is for uploading file through third party called multer
const multer = require('multer');

const fileFilter = ((req,file,cb)=>{
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(new Error('Only jpg and png file is allowed'),false);
    }
});




app.listen(port,()=>{
    console.log(`Started server at port ${port}`);
});