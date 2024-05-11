// orderController.js
const Order = require('../models/order');
const Cart = require('../models/cart');
const Book = require('../models/book');

// Place an order
const placeOrder = async(req, res) => {
    const userId = req.user.userId;
    console.log(userId);

    try {
        const book = await Book.find();
        console.log("first", book)

        const quantityAll = await Cart.findOne({ userId: userId });
        const quantity = quantityAll.quantity;
        console.log("secend", quantityAll)


        // Get the user's cart
        const cart = await Cart.findOne({ userId });
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }
        const totalPrice = cart.items.reduce((total, item) => {
            const bookPrice = item.book.price; // Get the price of the book associated with the item
            const itemTotalPrice = bookPrice * item.quantity; // Calculate the total price for this item
            return total + itemTotalPrice; // Add the item's total price to the running total
        }, 0);
        // Create a new order
        const order = new Order({
            userId,
            items: cart.items,
            totalPrice: totalPrice

        });

        // Clear the user's cart
        await Cart.findOneAndDelete({ userId });

        // Save the order
        await order.save();

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the user's order history
const getOrderHistory = async(req, res) => {
    const userId = req.user.userId;

    try {
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { placeOrder, getOrderHistory };