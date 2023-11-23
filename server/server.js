const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDb = require("./config/db");
connectDb();

const app = express();

const port = process.env.PORT || 50001;

app.use(express.json());

app.use("/cakes", require("./routes/cakesRoutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
