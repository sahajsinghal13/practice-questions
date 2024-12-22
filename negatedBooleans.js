// boolean negation of [true, false, true] => [false, true, false]
const inverse = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(inverse);
};

console.log(negatedBooleansOf([true, false, false, true, true, false]));