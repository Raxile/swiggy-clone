const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResturantSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    typeoffood:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
    
});


module.exports = mongoose.model('resturant', ResturantSchema);