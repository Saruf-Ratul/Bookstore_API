// // cartRoutes.js
// const express = require('express');
// const router = express.Router();
// const cartController = require('../controllers/cartController');
// const { requireAuth } = require('../middleware/authMiddleware');

// // Routes for shopping cart operations
// router.post('/', requireAuth, cartController.addToCart);
// router.get('/', requireAuth, cartController.getCart);
// router.delete('/:bookId', requireAuth, cartController.removeFromCart);
// router.delete('/', requireAuth, cartController.clearCart);

// module.exports = router;