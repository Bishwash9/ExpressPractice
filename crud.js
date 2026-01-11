const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //json data fetch garne or lets say json data parser 


//note use postman for seeing if the request works or not

//CRUD Operation Json data using express
let products =[
    {id:1,name:'p1',price: 2000 ,category:'Electronics'},
    {id:2,name:'p2',price: 5000 ,category:'Clothes'}
]
//get all products (Read)
app.get('/products',(req,res)=>{
    res.json(products);
});
//get products by id(read)
app.get('/products/:id',(req,res)=>{
    const id = Number(req.params.id)
    res.json(products.find(a=>a.id === id));
});

//add products (create)
app.post('/products', (req,res)=>{
    const {name,price,category} = req.body;
    products.push({
        id:products.length + 1,
        name,
        price,
        category

    });
    res.status(201).json(products, {message:"Products added successfully"});
});

//update product
app.put('/products/:id', (req,res)=>{
 const updateProduct = products.find(p=>p.id == req.params.id);
 if(!updateProduct){
    return res.status(404).json({message: "Product not found"});
 }

 const {name,price,category} = req.body;
    updateProduct.name = name;
    updateProduct.price = price;
    updateProduct.category = category;

    res.json({
        message: "Product updated successfully",
        product : updateProduct
    });
});


//delete
app.delete('/products/:id',(req,res)=>{
    const spliceIndex = products.findIndex(a=>a.id == req.params.id);
    products.splice(spliceIndex,1);
    res.json({message:"Product deleted successfully"});
});


app.listen(port,()=>{
    console.log(`server started at ${port}`);
});


