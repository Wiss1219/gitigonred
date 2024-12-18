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






module.exports={createProduct,getProduct}









