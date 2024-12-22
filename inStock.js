// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const isInStock = function (productStatus) {
  return productStatus.inStock;
};

const filterInStockProducts = function (products) {
  return products.filter(isInStock);
};

console.log(filterInStockProducts([{ product: "apple", inStock: true },
{ product: "banana", inStock: false }]));