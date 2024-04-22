const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all');
});

router.post('/:id', (req, res) => {
    res.send('Post a Pokemon');
});

router.get('/:id', (req, res) => {
    res.send('Get a Pokemon');
});

router.put('/:id', (req, res) => {
    res.send('Edit a Pokemon');
});

router.delete('/:id', (req, res) => {
    res.send('Delete a Pokemon');
});

module.exports = router;