const express = require("express");
const {
  addToCart,
  viewCart,
  clearCart,
} = require("../controllers/cartController");

const router = express.Router();

router.post("/addProductToCart", addToCart);
router.get("/getCartProducts", viewCart);
router.delete("/clearCart", clearCart);

module.exports = router;
