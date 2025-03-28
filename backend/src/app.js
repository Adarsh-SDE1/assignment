const express = require("express");
const cors = require("cors");
const cartRoutes = require("./routes/cartRoute");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/cart", cartRoutes);

module.exports = app;
