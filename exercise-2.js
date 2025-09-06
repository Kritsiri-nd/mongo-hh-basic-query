// หาลูกค้าชื่อ Zoe แล้วเลือกเฉพาะ total_price, customer_name
db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { _id: 0, total_price: 1, customer_name: 1 }
);
