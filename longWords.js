// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isLonger = function (word) {
  return word.length > 5;
};

const filterLongWords = function (words) {
  return words.filter(isLonger);
};

console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));