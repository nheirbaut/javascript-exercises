const toSingleDigit = function(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  return toSingleDigit((fahrenheit - 32) * (5 / 9));
};

const convertToFahrenheit = function(celcius) {
  return toSingleDigit(celcius * (9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
