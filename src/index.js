
exports.min = function min (array) {
  if(!array || array.length === 0) return 0;
  let sortedArray = array.sort((a,b) => (a-b));
  return sortedArray[0];
};

exports.max = function max (array) {
  if(!array || array.length === 0) return 0;
  let sortedArray = array.sort((a, b) => (a - b));
  return sortedArray[array.length - 1];
};

exports.avg = function avg (array) {
  if(!array || array.length === 0) return 0;
  return array.reduce((acc, element) => (acc + element)) / array.length;
};

