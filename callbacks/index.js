const fs = require("fs");

// basic example of a callback function
function person(name, callbackFunction) {
	console.log(`Hey ${name}`);
	callbackFunction();
}

function address() {
	console.log("South Africa");
}
// call the main funcction
person("Siphamandla", address);

fs.readFile("input.txt", 'utf8', (error, data) => {
	if (error) console.error("Unable to read file:", error);
	console.log(data);
});
