const mongoose = require ("mongoose");

const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be at least 2 characters long"]
    },
    Price: {
        type: Number,
        required: [true, "Price is required"],
        min : [1, "Price must be a minimum of 1"],
    },
    Description:{
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);