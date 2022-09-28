const express = require('express')
const router = express.Router();
const Resturant = require('../models/Resturant')
const Food = require('../models/Food')
const { body, validationResult } = require('express-validator');

// ROUTE 1: Create a FoodItem for a Resturant using: POST "/api/fooditem/addfood". No login required
router.post('/addfood', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('img', 'Enter a valid email').isLength({ min: 7 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('price'),
    body('resturant')
], async (req, res) => {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({  errors: errors.array() });
    }
     
    try {
         let item = await Food.create({
            name: req.body.name,
            img:req.body.img,
            description:req.body.description,
            price:req.body.price,
            resturant:req.body.resturant
          });   
        res.json(item)
    } 
    
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

 //Route 2 view a Resturant using GET "api/fooditem" 
    
 router.get('/', async (req,res)=>{
    try {
        
    let food = await Food.find();
    res.json(food);
    
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

//Route 3 view a foodItem form a specific Resturant

router.get('/:id' , async (req,res)=>{
    try {
        
           let food = await Food.find({resturant:req.params.id})
           res.json(food);

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
  })

module.exports = router;