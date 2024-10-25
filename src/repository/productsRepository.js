const generateId = require("../utils/generateId");

const products = [
  { id: 1, name: "agenda", category: "papelaria", price: 30, stock: 50 },
];

function addProduct(name, category, price, stock) {
  const id = generateId();
  const newProduct = {
    id: id,
    name: name,
    category: category,
    price: price,
    stock: stock,
  };
  products.push(newProduct);
  return newProduct;
}

function listAllProducts() {
  return products;
}

function updateProduct(id, name, category, price, stock) {
  const index = products.findIndex((product) => product.id == id);

  if (index == -1) {
    return false;
  }

  products[index].name = name;
  products[index].category = category;
  products[index].price = price;
  products[index].stock = stock;
  return products[index];
}

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id == id);
  if (index == -1) {
    return false;
  }
  products.splice(index, 1);
  return true
}


function findByName(selectedName) {
  const productFiltered = products.filter(
    (product) => product.name == selectedName
  );
  return productFiltered;
}

function findByCategory(selectedCategory) {
  const productFiltered = products.filter(
    (product) => product.category == selectedCategory
  );
  return productFiltered;
}

function findByPrice(selectedPrice) {
  const productFiltered= products.filter(
    (product) => product.price == selectedPrice
  );
  return productFiltered;
}

function findByStock(selectedStock) {
  const productFiltered = products.filter(
    (product) => product.stock == selectedStock
  );
  return productFiltered;
}

module.exports = { addProduct, listAllProducts, updateProduct, deleteProduct, findByName, findByCategory, findByPrice, findByStock};
