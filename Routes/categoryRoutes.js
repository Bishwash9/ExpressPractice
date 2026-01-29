const express = require('express');
const router = express.Router();

router.use(express.json());

let categoryList = ['CLoth', 'Home', 'Electronics'];

router.get('/categoryList', (req,res)=>{
    res.json(categoryList)
});
router.post('/categoryList', (req,res)=>{
    const {category} = req.body;

    categoryList.push(category);

    res.json({category:category, message:"Category added successfully"});
});

module.exports = router;