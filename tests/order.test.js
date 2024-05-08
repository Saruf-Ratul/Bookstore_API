// order.test.js
const Order = require('../models/order');
const orderController = require('../controllers/orderController');

describe('Order Controller', () => {
    describe('placeOrder', () => {
        test('should place an order', async() => {
            // Mock request and response objects
            const req = { body: { items: [{ bookId: '123456', quantity: 1 }] } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Mock Order.create method
            Order.create = jest.fn().mockResolvedValue({});

            // Call controller function
            await orderController.placeOrder(req, res);

            // Assertions
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'Order placed successfully' });
            expect(Order.create).toHaveBeenCalledWith({ items: [{ bookId: '123456', quantity: 1 }] });
        });
    });

});