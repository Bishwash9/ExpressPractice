const express = require('express');
const router = express.Router();

router.use(express.json());

let productList = [
    {id:1, name:'Samsung', category:'Phone'},
    {id:2, name:'Iphone', category:'Phone'},
    {id:3, name:'LG', category:'TV'},
    {id:4, name:'Oppo', category:'Phone'}
]

router.get('/productList',(req,res)=>{
    res.json(productList)
});

router.post('/productList', (req,res)=>{
    const {name , category} = req.body;
    
    const newProduct = {
        id:productList.length +1,
        name,
        category
    };

    productList.push(newProduct);

    res.json({product:newProduct, message:"Products added successfully"});
});