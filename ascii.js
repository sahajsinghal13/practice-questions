// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const encode = function (char) {
  return char.charCodeAt(0);
}

const charCodesOf = function (strings) {
  return strings.map(encode);
};

console.log(charCodesOf(['a', 'A', 'b', 'B', 'z', 'Z']));