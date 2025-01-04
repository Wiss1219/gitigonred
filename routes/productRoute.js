const express = require("express");
const router = express.Router();
const {createProduct,getProduct,updateProduct,deleteProduct}= require("../controllers/productsControllers")

router.post("/createProduct",createProduct )
router.get("/getProduct",getProduct)
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)












module.exports = router;
