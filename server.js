const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/db_config");
const port = process.env.PORT || 5000;

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.listen(port, () => console.log(`server started on port ${port}`));
