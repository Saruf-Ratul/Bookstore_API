const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js
const mongoose = require('mongoose');
const Book = require('../models/book'); // Assuming you have a Book model

// Before running tests, connect to the test database and add some sample books
beforeAll(async() => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // Add some sample books for testing
    await Book.create([
        { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', publicationDate: new Date(), price: 10 },
        { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', publicationDate: new Date(), price: 20 },
    ]);
});

// After running tests, disconnect from the database
afterAll(async() => {
    await mongoose.connection.close();
});

describe('Book API', () => {
    // Test fetching all books
    it('should fetch all books', async() => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2); // Assuming we added 2 sample books
    });

    // Test fetching a single book by ID
    it('should fetch a single book by ID', async() => {
        // Get the ID of the first book from the database
        const book = await Book.findOne();
        const res = await request(app).get(`/api/books/${book._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Book 1'); // Assuming the first book's title is 'Book 1'
    });

});