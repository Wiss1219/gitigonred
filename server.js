const express = require("express")
const app = express()
const mongoose= require("mongoose")
const dotenv = require("dotenv");
dotenv.config()


app.use(express.json())
app.use("/api", require("./routes/productRoute"))
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("database connected"))















const PORT =process.env.PORT
app.listen(PORT,()=> console.log("my server is running on port ",PORT))