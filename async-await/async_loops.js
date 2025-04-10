// import modules
const fetch = require("node-fetch");

// perform async operations on an array
async function fetchDataFromAPI() {
	try {
		const ids = [1, 2, 3, 4, 5];
		const store = [];
		const URL = "https://jsonplaceholder.typicode.com/todos/";
		for (const id of ids) {
			const response = await fetch(URL + id);
			// error handling
			if (!response.ok) {
				throw new Error("Failed to fetch API data");
			}
			// get json data
			const data = await response.json();
			store.push(data.title);
		return store;
		}
	} catch (error) {
		console.error(error);
	}
}

// myArray = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2"];
fetchDataFromAPI().then((titles) => {
	console.log(titles);
});
