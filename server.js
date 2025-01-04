const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/productRoute"));
console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line
// Ensure MONGO_URI is defined
if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1); // Exit the application if MONGO_URI is not set
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
app.listen(PORT, () => console.log("My server is running on port", PORT));