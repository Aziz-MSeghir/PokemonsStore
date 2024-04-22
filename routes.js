const express = require('express');
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');

// Routes

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/pokemon', pokemonRoutes);


module.exports = router;

