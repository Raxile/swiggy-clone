const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');

const Bill = require('../models/Bill');

// ROUTE 1: Create a Bill for a Specific Resturant using: POST "/api/bill. No login required

router.post('/',[
    // body('name'),
    // body('address'),
    body('cartItems'),
    body('cartTotalQuantity'),
    body('cartTotalAmount')
], async (req,res)=>{
    let Success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Success , errors: errors.array() });
    }
    try {
        let item = await Bill.create({
           customerName: 'dummyName',
           address: 'dummyAddress',
           cartItems:req.body.cartItems,
           cartTotalAmount:req.body.cartTotalAmount,
           cartTotalQuantity:req.body.cartTotalQuantity
         });   
        Success = true;
       res.json({Success ,item})
   }  
    catch (error) {
        console.error(error.message);
        res.status(500).send({Success , error:"Internal Server Error"});
    }
})

// 2nd Route View a SPECIFIC Bill : GET  "/api/bill/:_id"

router.get('/:id', async(req,res)=>{
    Success = false;
    try {
        let item = await Bill.findById({_id:req.params.id})
        Success = true;
        res.json({ Success,item})   
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send({Success, error:"Internal Server Error"});
    }
})

// 3rd Route Updare a Existing Bill: PATCH "/api/bill/update/:_id"
   
 router.patch('/update/:_id',async(req,res)=>{
    let Success = false;
    const { cartItems , cartTotalAmount , cartTotalQuantity } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Success , errors: errors.array() });
    }
    try {
        //Create a New Items
        const newItem = {};
       if(cartItems) { newItem.cartItems = cartItems }
       if(cartTotalAmount){newItem.cartTotalAmount = cartTotalAmount}
       if(cartTotalQuantity){newItem.cartTotalQuantity = cartTotalQuantity}
      
       //Find a item to be Updated and update it
       let item = Bill.findById(req.params._id)
       if (!item) { return res.status(404).send("Not Found") }
       item = await Bill.findByIdAndUpdate(req.params._id, { $set: newItem }, { new: true })
       Success = true;
       res.json({ Success,item });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({Success , error:"Internal Server Error"});
    }
 
})

module.exports = router;

// 'User-Name': {'type': 'string', 'value': ['\u0000\u0000\u0000\u0000']},