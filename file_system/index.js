const fs = require("fs");
const path = require("path");

// synchronous file handling
const dataFolder = path.join(__dirname, "data");
// console.log(dataFolder);
/* check if the folder exists. */
if (!fs.existsSync(dataFolder)) {
	// create the folder
	fs.mkdirSync(dataFolder);
	console.log("folder created:", dataFolder);
}
//*
// write to file
const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "first content added");;
console.log("Added new content to filePath");

// read the file
const data = fs.readFileSync(filePath, 'utf8');
console.log(data);

// asynchronous file handling
const file_path = path.join(dataFolder, "async-file.txt");
fs.writeFile(file_path, "Asynchronous file handling here", (error) => {
	if (error) throw error;
	console.log("second file created:", file_path);
	fs.readFile(file_path, 'utf8', (error, data) => {
		if (error) throw error;
		console.log(data);
		fs.appendFile(file_path, "\nThis is a newline added", (error) => {
			if (error) throw error;
			console.log("added new line to file");
			const data = fs.readFile(file_path, 'utf8', (error, data) => {
				console.log(data);
			})
		})
	})
})
