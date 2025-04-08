/* import modules */
const fs = require("fs");

// file system management.
fs.readFile("input.txt", "utf8", (error, data) => {
	if (error) console.error(error);
	console.log(data);
	const dataUppercase = data.toUpperCase();
	const filename = "output.txt";
	// create a new file.
	fs.writeFile(filename, dataUppercase, (error) => {
		if (error) console.error(error);
		console.log("written new content successfully!");
		// read contents of the new file.
		fs.readFile(filename, "utf8", (error, data) => {
			if (error) console.error(error);
			console.log(data);
		})
	})
})
