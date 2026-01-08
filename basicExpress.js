//first need to import express module
const express = require('express');

//then we use the express in app
const app = express();

//to start the server first we need to define the port we are going to run the server on
const port = 3000;

//we can use postman or directly run in the browser both works

//basic routing with express

//  IMP POINT only get request is shown in the browser o
app.get('/',(req,res)=>{
    res.send("This is home page");
});

app.get('/contact', (req,res)=>{
    res.send("this is contact page");
});

//for other operations such as post put delete use postman
app.post('/add', (req,res)=>{
    res.send("Data added successfully");
});
app.put('/update', (req,res)=>{
    res.send("Data updated successfully");
});
app.delete('/delete',(req,res)=>{
    res.send("Data deleted successfully");
});

//this starts the server at the defined port
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});