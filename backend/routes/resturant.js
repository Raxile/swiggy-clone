const express = require('express')
const Resturant = require('../models/Resturant')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// ROUTE 1: Create a Resturant using: POST "/api/resturants/addresturant". No login required
router.post('/addresturant', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('img', 'Enter a valid email').isLength({ min: 7 }),
    body('typeoffood', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('price', 'Password must be atleast 5 characters'),
    body('address', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({  errors: errors.array() });
    }
     
    try {
         let resturant = await Resturant.create({
            name: req.body.name,
            img:req.body.img,
            typeoffood:req.body.typeoffood,
            price:req.body.price,
            address:req.body.address
          });   
        res.json(resturant)
    } 
    
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

 //Route 2 view a Resturant using GET "api/resturants" 
    
    router.get('/', async (req,res)=>{
        try {
            
        let resturant = await Resturant.find();
        res.json(resturant);
        
        } catch (error) {
            console.error(error.message);
        res.status(500).send("Internal Server Error");
        }
    })
     
//Route 3 view a Resturant using GET "api/resturants/:id"

  router.get('/:id' , async (req,res)=>{
    try {
        let resturant = await Resturant.findById(req.params.id);
         if(!resturant){ return res.status(404).send("Not found")}
           
           res.json(resturant);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
  })

module.exports = router;