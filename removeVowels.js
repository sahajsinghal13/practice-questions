// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const isConsonant = function (char) {
  const vowels = 'aeiouAEIOU';
  return !vowels.includes(char);
};

const removeVowels = function (str) {
  return str.split('').filter(isConsonant).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));