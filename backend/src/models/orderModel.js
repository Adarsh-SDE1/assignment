class Order {
  constructor(
    id,
    items,
    totalAmount,
    discountCode = null,
    discountApplied = 0
  ) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.discountCode = discountCode;
    this.discountApplied = discountApplied;
  }
}

module.exports = Order;
