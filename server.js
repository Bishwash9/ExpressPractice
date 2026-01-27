const express = requiure('express');
const app = express();
const port = 4000;

let productRouter = require('./Routes/productRoutes');
app.use('/products',productRouter)

let categoryRouter = require('./Routes/categoryRoutes');
app.use('/categories',categoryRouter)

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
})