// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const isRecent = function (order) {
  return order.orderDate > '2024-11-21';
};

const filterRecentOrders = function (orders) {
  return orders.filter(isRecent);
};

console.log(filterRecentOrders([{ orderDate: "2024-11-01" },
{ orderDate: "2024-12-01" }, { orderDate: "2024-11-22" },
{ orderDate: "2024-11-21" }]));