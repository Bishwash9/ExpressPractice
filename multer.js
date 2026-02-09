const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

//this js is for uploading file through third party called multer
const multer = require('multer');

const fileFilter = ((req,file,cb)=>{
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null,true);
    }else{
        cb(new Error('Only jpg and png file is allowed'),false);
    }
});

//this is for storing the file in the disk storage
const storage = multer.diskStorage({
    destination: ((req,file,cb)=>{
        cb(null,'uploads');
    }),
    filename : ((req,file,cb)=>{
        cb(null,file.originalname);
    })
}); 

const upload = multer ({
    storage,
    fileFilter:fileFilter,
    limits:{fileSize:1024*24*5}
});

app.post('/uploadfile',upload.single('photo'),(req,res)=>{
    res.json(req.file);
});


app.listen(port,()=>{
    console.log(`Started server at port ${port}`);
});