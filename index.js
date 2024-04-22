const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');

require('dotenv').config();

let app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my backend');
});
app.use('/api', routes);

mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => 
        console.log("Connecté à MongoDB"))
    .catch((err) => console.log("Erreur de connction", err));

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
