// หาลูกค้าชื่อ Cherlyn
db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

// หาทุก order ที่จ่ายด้วย mastercard
db.pizzaOrders.find({ credit_card_type: "mastercard" });

// หาทุก order ที่ size medium (limit 5)
db.pizzaOrders.find({ size: "medium" }).limit(5);
