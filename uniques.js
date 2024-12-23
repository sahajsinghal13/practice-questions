// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const isUnique = function (uniques, char) {
  return uniques.includes(char) ? uniques : uniques + char;
};

const removeSame = function (str) {
  return str.split("").reduce(isUnique, "");
};

const uniqueCharactersOf = function (strings) {
  return strings.map(removeSame);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));
