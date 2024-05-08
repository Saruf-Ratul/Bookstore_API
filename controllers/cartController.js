// // cartController.js
// const Cart = require('../models/cart');
// const Book = require('../models/book');

// // Add a book to the cart
// const addToCart = async(req, res) => {
//     const { bookId, quantity } = req.body;
//     const userId = req.user.userId;

//     try {
//         // Check if the book exists
//         const book = await Book.findById(bookId);
//         if (!book) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         // Add the book to the cart
//         let cart = await Cart.findOne({ userId });
//         if (!cart) {
//             cart = new Cart({ userId, items: [] });
//         }

//         const existingItem = cart.items.find(item => item.bookId.equals(bookId));
//         if (existingItem) {
//             existingItem.quantity += quantity;
//         } else {
//             cart.items.push({ bookId, quantity });
//         }

//         await cart.save();

//         res.json(cart);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get the user's cart
// const getCart = async(req, res) => {
//     const userId = req.user.userId;

//     try {
//         const cart = await Cart.findOne({ userId }).populate('items.bookId');
//         res.json(cart);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Remove a book from the cart
// const removeFromCart = async(req, res) => {
//     const { bookId } = req.params;
//     const userId = req.user.userId;

//     try {
//         const cart = await Cart.findOne({ userId });
//         if (!cart) {
//             return res.status(404).json({ message: 'Cart not found' });
//         }

//         const index = cart.items.findIndex(item => item.bookId.equals(bookId));
//         if (index === -1) {
//             return res.status(404).json({ message: 'Book not found in cart' });
//         }

//         cart.items.splice(index, 1);
//         await cart.save();

//         res.json(cart);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Clear the user's cart
// const clearCart = async(req, res) => {
//     const userId = req.user.userId;

//     try {
//         await Cart.findOneAndDelete({ userId });
//         res.json({ message: 'Cart cleared successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { addToCart, getCart, removeFromCart, clearCart };