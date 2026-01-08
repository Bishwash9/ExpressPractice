const express = require('express');
const app = express();
const port = 4000;

//There are two parameters route parameters and query parameters

//route parameters: used in cases like when going to specific pages of a certain page 
//like going to a specific product detail page of an product

//Url should be given like this /products/1 
app.get('/products/:productId',(req,res)=>{
    res.send(`product detail for specific product ${req.params.productId}`);
});


//query parameters: used in when a user or person searches for a specific page or request

//gives result based on search using params 
app.get('/search',(req,res)=>{
    res.send(`the searach result for the following query is ${req.query.q}`);
});








app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});

