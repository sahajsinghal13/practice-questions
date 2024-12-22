// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstChar = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

console.log(firstCharactersOf(["apple", "banana", "kiwi", "hello world"]));