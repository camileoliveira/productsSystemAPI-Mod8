function dataValidation(product) {
  if (typeof product.name !== "string") {
    return false;
  }

  if (typeof product.category !== "string") {
    return false;
  }

  if (typeof product.price !== "number") {
    return false;
  }

  if (typeof product.stock !== "number") {
    return false;
  }
  return true
}

module.exports = dataValidation