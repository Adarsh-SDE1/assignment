const store = require("../db/data.js");
const CartItem = require("../models/cartModel");

// Add item to cart
const addToCart = (req, res) => {
  const { id, name, price, quantity } = req.body;

  if (!id || !name || !price || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newItem = new CartItem(id, name, price, quantity);
  store.cart.push(newItem);

  res.status(201).json({ message: "Item added to cart", cart: store.cart });
};

// View the cart items
const viewCart = (req, res) => {
  res.status(200).json({ cart: store.cart });
};

// Clear out the cart
const clearCart = (req, res) => {
  store.cart = [];
  res.status(200).json({ message: "Cart cleared" });
};

module.exports = { addToCart, viewCart, clearCart };
