// import modules
const fs = require("fs").promises;

async function readfileAsyncAwait(fileName) {
	try {
		const data = await fs.readFile(fileName, 'utf8');
		if (!data.okay) {
			throw new Error("Unable to read file");
		}
		await fs.writeFile("output.txt", data);
	} catch (error) {
		console.error(error);
	}
}

filename = "data.txt";
readfileAsyncAwait(filename);
