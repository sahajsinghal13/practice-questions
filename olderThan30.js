// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const isOlder = function (personDetail) {
  return personDetail.age > 30;
}
const filterAdults = function (people) {
  return people.filter(isOlder);
 };
 
 console.log(filterAdults([{name: "Alice", age: 25},
   {name: "Bob", age: 35}], {name: "Frank", age: 30}));