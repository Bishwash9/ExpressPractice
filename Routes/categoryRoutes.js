const express = require('express');
const router = express.Router();

router.use(express.json());

let categoryList = ['CLoth', 'Home', 'Electronics'];

router.get('/categoryList', (req,res)=>{
    res.json(categoryList)
});

module.exports = router;