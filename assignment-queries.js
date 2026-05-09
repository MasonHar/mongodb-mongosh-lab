// use lab db
use('storeDB');

// all products
db.products.find();

// find warehouse c products
db.products.find({ warehouse: "C" });

// price < 50
db.products.find({ price: { $lt: 50 } });

// quantity >= 100
db.products.find({ quantity: { $gte: 100 } });

// warehouse a and price > 100
db.products.find({ warehouse: "A", price: { $gt: 100 } });

// warehouse b and price < 100
db.products.find({ warehouse: "B", price: { $lt: 100 } });

// qty < 50 and price > 50
db.products.find({ quantity: { $lt: 50 }, price: { $gt: 50 } });

// keyboard price -> 44.99
db.products.updateOne({ name: "Keyboard" }, { $set: { price: 44.99 } });

// mouse: add category accessories
db.products.updateOne({ name: "Mouse" }, { $set: { category: "Accessories" } });

// hdmi cable qty +30
db.products.updateOne({ name: "HDMI Cable" }, { $inc: { quantity: 30 } });

// delete printer
db.products.deleteOne({ name: "Printer" });

// delete everything in warehouse d
db.products.deleteMany({ warehouse: "D" });

// delete products price < 10
db.products.deleteMany({ price: { $lt: 10 } });
