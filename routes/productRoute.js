const express = require("express");
const router = express.Router();
const {createProduct,getProduct}= require("../controllers/productsControllers")

router.post("/createProduct",createProduct )
router.get("/getProduct",getProduct)
// router.put('/updateUser/:id',updateProduct)
// router.delete('/updateUser/:id',deleteProduct)













module.exports = router;
