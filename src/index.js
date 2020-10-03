
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {return 0;}

  return array.reduce(function(a, b) {return a < b ? a : b;});
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {return 0;}

  return array.reduce(function(a, b) {return b < a ? a : b;});
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {return 0;}

  let result = array.reduce((a, b) => a+b)/array.length;

  return result;
}
