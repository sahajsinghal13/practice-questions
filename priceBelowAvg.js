// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const calcAverage = function (average, product) {
  average += (product.price / products.length);
   return average;
 };

const filterBelowAveragePrice = function (products) {
  const avg = products.reduce(calcAverage, 0);
  console.log(avg);
 };

const products = [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 6}];

 filterBelowAveragePrice(products);