const express = require("express");
const router = express.Router();
const productService = require("./product.service");

// GET /products (with pagination)
router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.per_page) || 25;
    const search = req.query.search || undefined;

    const products = await productService.getAllProducts({
      page,
      perPage,
      search,
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /products
router.post("/", async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /products/:id
router.put("/:id", async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /products/:id
router.delete("/:id", async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
