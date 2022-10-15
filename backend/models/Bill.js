const mongoose = require('mongoose');
const { Schema } =  mongoose;

const BillSchema = new Schema({ 
    name:{
        type: String
    },
    address:{
        type: String
    },
    resturantID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resturant'
    },
    foodItems: [{
        'type':{type: Object},
         'foodId':{
            type: mongoose.Schema.Types.ObjectId,
            ref:'food'
         },
         'quantity':{
            type:String
         }

    }] ,

    totalQuantity:{
        type: String,
        required: true,
    },
    totalAmount:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('bill',BillSchema)
