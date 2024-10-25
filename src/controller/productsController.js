const {
  addProductService,
  listAllProductsService,
  updateProductService,
  deleteProductService,
  findByNameService,
  findByCategoryService,
  findByPriceService,
  findByStockService,
} = require("../service/productsService");

const dataValidation = require("../utils/dataValidation");

function addProductHandler(req, res) {
  const { name, category, price, stock } = req.body;
  const isValid = dataValidation({ name, category, price, stock });

  if (!isValid) {
    return res.status(400).send("Invalid product data!");
  }
  const newProduct = addProductService(name, category, price, stock);
  res.status(200).send(newProduct);
}

function listAllProductsHandler(req, res) {
  const products = listAllProductsService();
  res.status(200).send(products);
}

function updateProductHandler(req, res) {
  const { id } = req.params;
  const { name, category, price, stock } = req.body;
  const isValid = dataValidation({ name, category, price, stock });

  if (!isValid) {
    return res.status(400).send("Invalid new data!");
  }

  const updatedProduct = updateProductService(id, name, category, price, stock);
  res.status(200).send(updatedProduct);
}

function deleteProductHandler(req, res) {
  const { id } = req.params;
  const removedProduct = deleteProductService(id);
  if (removedProduct) {
    return res.status(200).send("Product removed");
  }
  return res.status(404).send("Product not found");
}

function findProductHandler(req, res) {
  const { name, category, price, stock } = req.query;

  if (name) {
    const productName = findByNameService(name);
    return res.status(200).send(productName);
  }

  if (category) {
    const productCategory = findByCategoryService(category);
    return res.status(200).send(productCategory);
  }

  if (price) {
    const productPrice = findByPriceService(price);
    return res.status(200).send(productPrice);
  }

  if (stock) {
    const productStock = findByStockService(stock);
    return res.status(200).send(productStock);
  }
}

module.exports = {
  addProductHandler,
  listAllProductsHandler,
  updateProductHandler,
  deleteProductHandler,
  findProductHandler
};
