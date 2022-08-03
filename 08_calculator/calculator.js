const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let num = 0;

  for (let i = 0; i < arr.length; i += 1) {
    num += arr[i];
  }

  return num;
};

const multiply = function(arr) {
  let num = 1;

  for (let i = 0; i < arr.length; i++) {
    num = num * arr[i];
  }

  return num;

};

const power = function(a, b) {
	num = Math.pow(a, b);
  return num;
};

const factorial = function(num) {
	if (num < 0){
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num -1))
  }
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
