// Promise example
function division(num1, num2) {
	// return a new promise
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      reject("Both inputs must be numbers");
    } else if (!isFinite(num1) || !isFinite(num2)) {
      reject("Both inputs must be finite numbers");
    } else if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      const value = num1 / num2;
      resolve(value);
    }
  });
}

division(1, 0)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
