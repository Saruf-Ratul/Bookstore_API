// // orderController.js
// const Order = require('../models/order');
// const Cart = require('../models/cart');

// // Place an order
// const placeOrder = async(req, res) => {
//     const userId = req.user.userId;

//     try {
//         // Get the user's cart
//         const cart = await Cart.findOne({ userId });
//         if (!cart || cart.items.length === 0) {
//             return res.status(400).json({ message: 'Cart is empty' });
//         }

//         // Create a new order
//         const order = new Order({
//             userId,
//             items: cart.items,
//             totalPrice: cart.items.reduce((total, item) => total + item.bookId.price * item.quantity, 0)
//         });

//         // Clear the user's cart
//         await Cart.findOneAndDelete({ userId });

//         // Save the order
//         await order.save();

//         res.json(order);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get the user's order history
// const getOrderHistory = async(req, res) => {
//     const userId = req.user.userId;

//     try {
//         const orders = await Order.find({ userId });
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { placeOrder, getOrderHistory };