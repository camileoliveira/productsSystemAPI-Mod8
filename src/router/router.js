const express = require("express");
const router = express.Router();
const {
  addProductHandler,
  listAllProductsHandler,
  updateProductHandler,
  deleteProductHandler,
  findProductHandler,
} = require("../controller/productsController");

router.post("/product", addProductHandler);
router.get("/product", listAllProductsHandler);
router.put("/product/:id", updateProductHandler);
router.delete("/product/:id", deleteProductHandler);
router.get("/product/search", findProductHandler);

module.exports = router;
