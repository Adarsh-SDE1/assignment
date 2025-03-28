const express = require("express");
const { checkout, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/checkout", checkout);
router.get("/orders", getOrders);

module.exports = router;
