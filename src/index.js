const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

const productController = require("./product/product.controller");
const categoryController = require("./Categories/category.controller");

app.use("/products", productController);
app.use("/categories", categoryController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});