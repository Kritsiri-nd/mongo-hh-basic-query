// Sort total_price จากมากไปน้อย
db.pizzaOrders.find().sort({ total_price: -1 });

// Sort created_at จากเก่าสุด → ใหม่สุด
db.pizzaOrders.find().sort({ created_at: 1 });
