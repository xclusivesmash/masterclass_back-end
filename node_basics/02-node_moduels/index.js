// module.exports - export the things you want to use
// require (similar to import in ES) - get the things you want
const firstModule = require('./first_module');


console.log(firstModule.add(15, 30));
console.log(firstModule.subtract(20, 3));

try {
	console.log("Trying division by zero...");
	const result = firstModule.divide(0, 12);
	console.log(result);
} catch(error) {
	console.log("Caught an error: ", error.message);
}
