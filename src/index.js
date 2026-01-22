const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const productController = require("./Product/product.controller.js");
const categoryController = require("./Categories/category.controller.js");

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const corsOptions = {
  // dynamic origin check so we can log/debug and allow multiple variants
  origin: function (origin, callback) {
    // allow requests with no origin (e.g., mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

// small debug middleware to surface the incoming Origin header in logs
app.use((req, res, next) => {
  console.log("Incoming Origin:", req.headers.origin);
  next();
});

app.use(cors(corsOptions));

app.use("/products", productController);
app.use("/categories", categoryController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
