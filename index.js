const express = require('express');  
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js'); // Corrected file path

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://admin:4qKiJtpn6ZI8lPVT@backenddb.tmn9o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('MongoDB connected…');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => console.log(err));
