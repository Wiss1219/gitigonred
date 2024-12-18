const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    quantity:Number,

})
const Product=mongoose.model("product",productSchema)
module.exports=Product


