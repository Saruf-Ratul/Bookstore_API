// // orderRoutes.js
// const express = require('express');
// const router = express.Router();
// const orderController = require('../controllers/orderController');
// const { requireAuth } = require('../middleware/authMiddleware');

// // Routes for order-related operations
// router.post('/', requireAuth, orderController.placeOrder);
// router.get('/', requireAuth, orderController.getOrderHistory);

// module.exports = router;