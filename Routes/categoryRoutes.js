const express = require('express');
const router = express.Router();

router.use(express.json());

let categoryList = ['Cloth', 'Home', 'Electronics'];

//get all categories
router.get('/categoryList', (req,res)=>{
    res.json(categoryList)
});
//add new category
router.post('/categoryList', (req,res)=>{
    const {category} = req.body;

    categoryList.push(category);

    res.json({category:category, message:"Category added successfully"});
});

//delete category
router.delete('/categoryList/:category', (req,res)=>{
    const {category} = req.params;

    categoryList = categoryList.filter((cat)=> cat !== category);

    res.json({message:"Category deleted successfully"});
});


router.put('/categoryList/:category', (req,res)=>{
    const {category} = req.params;
    const {newCategory} = req.body;

    const categoryIndex = categoryList.findIndex((cat)=> cat === category);

    if(categoryIndex === -1){
        return res.status(404).json({message:"Category not found"});
    }

    categoryList[categoryIndex] = newCategory;

    res.json({message:"Category updated successfully", category:newCategory});
});

module.exports = router;