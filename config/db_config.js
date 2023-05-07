const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log(`db connected at ${process.env.MONGO_URL}`);
});
connection.on("error", () => {
  console.log("db connection failed");
});

module.exports = connection;
