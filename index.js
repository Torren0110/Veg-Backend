const express = require("express");
const cors = require("cors");
const vegetables = require("./routes/vegetables");
const users = require("./routes/users");
const carts = require("./routes/carts");
const orders = require("./routes/orders")
const sales = require("./routes/sales")
const mongoose = require("mongoose");
const app = express();
const process = require("process");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to mongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/vegetables", vegetables);
app.use("/api/users", users);
app.use("/api/carts", carts);
app.use("/api/orders", orders);
app.use("/api/sales", sales);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listning on ${port}...`);
});
