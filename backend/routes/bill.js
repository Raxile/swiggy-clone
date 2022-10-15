const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');

const Bill = require('../models/Bill');

// ROUTE 1: Create a Bill for a Specific Resturant using: POST "/api/bill. No login required

router.post('/',[
    body('name'),
    body('address'),
    body('resturantID'),
    body('foodItems'),
    body('totalQuantity'),
    body('totalAmount')
], async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({  errors: errors.array() });
    }
    try {
        let item = await Bill.create({
           name: req.body.name,
           address:req.body.address,
           resturantID:req.body.resturantID,
           foodItems:req.body.foodItems,
           totalAmount:req.body.totalAmount,
           totalQuantity:req.body.totalQuantity
         });   
        
       res.json(item)
   }  
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// 2nd Route View a SPECIFIC Bill : GET  "/api/bill/:_id"

router.get('/:id', async(req,res)=>{
    try {
        let item = await Bill.findById({_id:req.params.id})
        res.json(item)   
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;

// 'User-Name': {'type': 'string', 'value': ['\u0000\u0000\u0000\u0000']},