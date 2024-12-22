// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const calcAverage = function (average, product) {
  average += (product.price / products.length);
  return average;
};

const isBelow = function (value) {
  return function (productDetails) {
    return productDetails.price < value;
  }
}

const filterBelowAveragePrice = function (products) {
  const avg = products.reduce(calcAverage, 0);
  const priceBelow = isBelow(avg);

  return products.filter(priceBelow);
};

const products = [{ name: "item1", price: 10 }, { name: "item2", price: 20 },
{ name: "item3", price: 6 }, { name: "item4", price: 12 }];

console.log(filterBelowAveragePrice(products));