const store = require("../db/data");
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

// Checkout and place order
const checkout = (req, res) => {
  if (store.cart.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  let totalAmount = store.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  let discountApplied = 0;
  let discountCode = null;

  // Apply discount if nth order
  store.orderCount++;
  if (store.orderCount % 5 === 0) {
    discountCode = `DISCOUNT-${uuidv4().slice(0, 8)}`;
    discountApplied = totalAmount * 0.1;
    totalAmount -= discountApplied;

    store.discountCodes.push(discountCode);
  }

  const newOrder = new Order(
    uuidv4(),
    [...store.cart],
    totalAmount,
    discountCode,
    discountApplied
  );
  store.orders.push(newOrder);
  store.cart = [];

  res
    .status(201)
    .json({ message: "Order placed successfully", order: newOrder });
};

// View all orders
const getOrders = (req, res) => {
  res.status(200).json({ orders: store.orders });
};

module.exports = { checkout, getOrders };
