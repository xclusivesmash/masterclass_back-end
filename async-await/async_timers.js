// import modules
const fetch = require("node-fetch");

async function fetchDataFromAPI(URL) {
	try {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const response = await fetch(URL);
		// get data
		const data = await response.json();
		return data.title;
	} catch (error) {
		console.error(error);
	}
}

url = "https://jsonplaceholder.typicode.com/todos/1";
fetchDataFromAPI(url).then((title) => console.log(title));
