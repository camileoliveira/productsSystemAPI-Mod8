const {
  addProduct,
  listAllProducts,
  updateProduct,
  deleteProduct,
  findByCategory,
  findByPrice,
  findByStock,
  findByName,
} = require("../repository/productsRepository");

function addProductService(name, category, price, stock) {
  return addProduct(name, category, price, stock);
}

function listAllProductsService() {
  return listAllProducts();
}

function updateProductService(id, name, category, price, stock) {
  return updateProduct(id, name, category, price, stock);
}

function deleteProductService(id) {
  return deleteProduct(id);
}

function findByNameService(selectedName) {
  return findByName(selectedName);
}

function findByCategoryService(selectedCategory) {
  return findByCategory(selectedCategory);
}

function findByPriceService(selectedPrice) {
  return findByPrice(selectedPrice);
}

function findByStockService(selectedStock) {
  return findByStock(selectedStock);
}

module.exports = {
  addProductService,
  listAllProductsService,
  updateProductService,
  deleteProductService,
  findByNameService,
  findByCategoryService,
  findByPriceService,
  findByStockService
};
