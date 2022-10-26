const mongoose = require('mongoose');
const { Schema } =  mongoose;

const BillSchema = new Schema({ 
    customerName:{
        type: String
    },
    address:{
        type: String
    },
    cartItems: [{
        'type':{type: Object},
         '_id':{
            type: mongoose.Schema.Types.ObjectId,
            ref:'food'
         },
         'img':{
            type: String
         },
         'description':{
            type: String
         },
         'name':{
            type: String
         },
         'price':{
            type: String
         },
         'resturant':{
            type: mongoose.Schema.Types.ObjectId,
            ref:'resturant'
         },
         
         'cartQuantity':{
            type:String
         }

    }] ,

    cartTotalQuantity:{
        type: String,
        required: true,
    },
    cartTotalAmount:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('bill',BillSchema)
