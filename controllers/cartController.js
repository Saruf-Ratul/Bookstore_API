// cartController.js
const Cart = require('../models/cart');
const Book = require('../models/book');

// Add a book to the cart
const addToCart = async(req, res) => {
    const { bookId, quantity = "1" } = req.body;
    // console.log(bookId, quantity)
    const userId = req.user.userId;

    try {
        // Check if the book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Find the user's cart or create a new one if not exists
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        // Check if the book already exists in the cart
        const existingCartItem = cart.items.find(item => item.book.equals(book._id));
        if (existingCartItem) {
            // If it does, update the quantity
            // existingCartItem.quantity += quantity
            existingCartItem.quantity += parseInt(quantity, 10);
            // console.log(existingCartItem.quantity, quantity)
        } else {
            // If not, add the book to the cart
            cart.items.push({ book: book._id, quantity });
        }

        await cart.save();
        res.json(cart);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the user's cart
const getCart = async(req, res) => {
    const userId = req.user.userId;

    try {
        // Find the user's cart
        const cart = await Cart.findOne({ userId }).populate('items.book');

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        res.json(cart);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Remove a book from the cart
const removeFromCart = async(req, res) => {
    const userId = req.user.userId;
    const bookId = req.params.bookId; // Assuming bookId is passed as a route parameter

    try {
        // Find the user's cart
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        // Find the index of the book in the cart's items array
        const index = cart.items.findIndex(item => item.book.equals(bookId));

        if (index === -1) {
            return res.status(404).json({ message: 'Book not found in the cart' });
        }

        // Remove the book from the cart's items array
        cart.items.splice(index, 1);

        // Save the updated cart
        await cart.save();

        res.json(cart);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Clear the user's cart
const clearCart = async(req, res) => {
    const userId = req.user.userId;

    try {
        await Cart.findOneAndDelete({ userId });
        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addToCart, getCart, removeFromCart, clearCart };