// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const isGreater = function (bookSpecs) {
  return bookSpecs.pages > 200;
};

const filterLongBooks = function (books) {
  return books.filter(isGreater);
};

console.log(filterLongBooks([{title: "Book 1", pages: 150},
  {title: "Book 2", pages: 250}, {title: "Book 3", pages: 200}]));