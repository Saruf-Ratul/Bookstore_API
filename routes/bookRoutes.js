// bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { requireAuth } = require('../middleware/authMiddleware');

// CRUD operations for books
router.get('/', bookController.getAllBooks);
router.post('/', requireAuth, bookController.createBook);
router.get('/:id', bookController.getBookById);
router.put('/:id', requireAuth, bookController.updateBook);
router.delete('/:id', requireAuth, bookController.deleteBook);

// Search for books
router.get('/search', bookController.searchBooks);

module.exports = router;