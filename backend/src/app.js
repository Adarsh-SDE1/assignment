const express = require("express");
const cors = require("cors");
const cartRoutes = require("./routes/cartRoute");
const orderRoutes = require("./routes/orderRoute");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
module.exports = app;
