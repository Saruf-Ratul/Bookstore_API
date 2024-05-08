// cart.test.js
const Cart = require('../models/cart');
const cartController = require('../controllers/cartController');

describe('Cart Controller', () => {
    describe('addToCart', () => {
        test('should add a book to the cart', async() => {
            // Mock request and response objects
            const req = { body: { bookId: '123456', quantity: 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Mock Cart.create method
            Cart.create = jest.fn().mockResolvedValue({});

            // Call controller function
            await cartController.addToCart(req, res);

            // Assertions
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'Book added to cart successfully' });
            expect(Cart.create).toHaveBeenCalledWith({ bookId: '123456', quantity: 1 });
        });
    });
});