const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    description :{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    unitPrice:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Product',ProductSchema);