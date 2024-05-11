// Create web server
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Data
let comments = [
    { id: 1, author: 'Dale', comment: 'Hello, world!' },
    { id: 2, author: 'John', comment: 'Hello, Dale!' },
    { id: 3, author: 'Dale', comment: 'Hello, John!' },
];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    if (!comment) return res.status(404).send('Comment not found.');
    res.json(comment);
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,