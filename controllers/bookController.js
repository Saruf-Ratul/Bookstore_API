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

// Get all books

const getBooks = async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single book

const getBook = async(req, res) => {
    const { id } = req.params;
    // console.log(id)

    try {
        const book = await Book.findById(id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a book

const updateBook = async(req, res) => {
    const { id } = req.params;
    const { title, author, genre, publicationDate, price } = req.body;

    try {
        const book = await Book.findById(id);
        book.title = title;
        book.author = author;
        book.genre = genre;
        book.publicationDate = publicationDate;
        book.price = price;
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a book

const deleteBook = async(req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        await book.deleteOne();
        res.json({ message: 'Book removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search Books a book

const searchBooks = async(req, res) => {
    const { title } = req.query;

    try {
        const books = await Book.find({ title: { $regex: title, $options: 'i' } });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the functions

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    searchBooks
};