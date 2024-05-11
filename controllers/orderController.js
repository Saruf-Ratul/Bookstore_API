// orderController.js
const Order = require('../models/order');
const Cart = require('../models/cart');
const Book = require('../models/book');

// Place an order
const placeOrder = async(req, res) => {
    const userId = req.user.userId;
    // console.log(userId);

    try {
        const book = await Book.find();
        // console.log("first", book)
        const quantityAll = await Cart.findOne({ userId: userId });
        // console.log("secend", quantityAll)
        if (!quantityAll) {
            // Handle the case where the cart is empty
            console.log('Cart is empty');
            return;
        }
        let totalPriceitem = 0;
        quantityAll.items.forEach(cartItem => {
            const bookInCart = book.find(item => item._id.equals(cartItem.book));
            if (bookInCart) {
                totalPriceitem += bookInCart.price * cartItem.quantity;
            }
        });

        // console.log("Total Price:", totalPriceitem);

        // Get the user's cart
        const cart = await Cart.findOne({ userId });
        console.log(cart);
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }
        // Create a new order
        const order = new Order({
            userId,
            items: cart.items.map(cartItem => ({
                bookId: cartItem.book,
                quantity: cartItem.quantity
            })),
            totalPrice: totalPriceitem
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