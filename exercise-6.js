// updateMany: เพิ่ม isAdmin:false ให้ Jack ทุกอัน
db.pizzaOrders.updateMany(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);

// updateMany: เพิ่ม country:Thailand ให้ทุกอัน
db.pizzaOrders.updateMany(
  {},
  { $set: { country: "Thailand" } }
);

// updateOne: อัปเดตหรือถ้าไม่เจอให้ insert ใหม่ (upsert)
db.pizzaOrders.updateOne(
  { customer_name: "M" },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z"
    }
  },
  { upsert: true }
);
