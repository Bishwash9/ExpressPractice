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

router.put('/productList/:productId', (req,res)=>{
    const updateProduct = productList.find(p=>p.productId == req.params.id);

    if(!updateProduct){
        return res.status(404).json({message:"Unable to find product"});

    }
    const {name,category} = req.body;
    updateProduct.name = name;
    updateProduct.category = category;

    res.json({
        messag: "Product updated successfully",
        product: updateProduct
    });
});

router.delete('/productList/:productId', (req,res)=>{
    const pId = Number(req.params.productId);
    const productIndex = productList.findIndex(p=>p.prodcutId === pId);
    productList.splice(productIndex,1);

    res.json({message:"Product deleted successfully"});
});

router.get('/:prodcutId', (req,res)=>{
    let prodcutId = req.params.prodcutId;
    let findProduct = productList.find(p=>p.id === prodcutId);
    res.send(findProduct);
});

module.exports = router;