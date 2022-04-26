const mongoose = require("mongoose");

//const connectionString = process.env.MONGO_URI;
const connectionString = `mongodb://mongo:27017/cinema`;
mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
