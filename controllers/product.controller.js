const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {   
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product
            .findByIdAndUpdate(id, req.body, { new: true });
        if (!product) { 
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }   
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

module.exports = { 
    getProducts, 
    getProduct, 
    createProduct,
    updateProduct,
    deleteProduct
};