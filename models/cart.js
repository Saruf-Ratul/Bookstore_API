const mongoose = require('mongoose');

// Define the schema for each item in the Cart
const cartItemSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

// Define the schema for the Cart model
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [cartItemSchema], // Reference to the cartItemSchema
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;