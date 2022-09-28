const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    
    price:{
        type: Number,
        required: true
    },
    resturant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resturant'
    }
    
});


module.exports = mongoose.model('food', FoodSchema);