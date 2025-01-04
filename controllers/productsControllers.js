const Product = require("../models/productSchema");

const createProduct= async (req, res) => {
  
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ msg: "Product created", product: newProduct });
    } catch (error) {
        res.status(500).json({ msg: error.message });  
    }    
}
const getProduct = async (req, res) => {
  
    try {
        const products = await Product.find();
        res.status(200).json({ msg: "Products found", products });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
const updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product updated", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ msg: "Error updating product", error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json({ msg: "Product deleted", product: deletedProduct });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting product", error: error.message });
    }
}

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };








