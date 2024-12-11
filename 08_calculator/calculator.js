const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  let total = 0;
  array.forEach(n => total += n);

  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(n => total *= n);

  return total;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
