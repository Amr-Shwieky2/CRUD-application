const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const connectDb = require("./config/db");
connectDb();

const app = express();
app.use(cors());

const port = process.env.PORT || 5001;

app.use(express.json());

app.use("/cakes", require("./routes/cakesRoutes"));
app.use("/order", require("./routes/orderRoutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
