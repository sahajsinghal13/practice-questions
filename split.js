// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitStr = function (str) {
  return str.split(' ');
};

const splitWordsOf = function (strings) {
  return strings.map(splitStr);
};

console.log(splitWordsOf(['hello world', 'goodbye 2024 and welcome 2025']));