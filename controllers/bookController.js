// bookController.js
const Book = require('../models/book');

// Create a new book
const createBook = async(req, res) => {
    const { title, author, genre, publicationDate, price } = req.body;

    try {
        const book = new Book({ title, author, genre, publicationDate, price });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createBook };