// import modules
const fetch = require("node-fetch");
const {EventEmitterAsyncResource} = require("node:stream");


async function fetchDataAndHandleErrors(api_url) {
	try {
		const response = await fetch(api_url);
		/// check if response is valid
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		// return json format
		const data = await response.json();
		return data.title; // Promise
	} catch (error) {
		return  "error: " + error.message;
	}
}

url = "https://jsonplaceholder.typicode.com/todos/1";
fetchDataAndHandleErrors(url).then((title) => {
	 console.log(title);
});
