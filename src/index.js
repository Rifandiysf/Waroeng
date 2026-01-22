const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const productController = require("./Product/product.controller.js");
const categoryController = require("./Categories/category.controller.js");

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOption));

app.use("/products", productController);
app.use("/categories", categoryController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
