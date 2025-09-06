// จำนวน pizza < 5 และจ่ายด้วย mastercard
db.pizzaOrders.find({
  quantity: { $lt: 5 },
  credit_card_type: "mastercard"
});

// size = small และ quantity ระหว่าง 1 - 5
db.pizzaOrders.find({
  size: "small",
  quantity: { $gte: 1, $lte: 5 }
});

// จำนวน pizza > 10 และไม่ได้จ่ายด้วย Credit Card
db.pizzaOrders.find({
  quantity: { $gt: 10 },
  credit_card_type: null
});
