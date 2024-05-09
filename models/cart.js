const mongoose = require('mongoose');

// Define the schema for the Cart model
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        bookId: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Cart model from the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;