// import modules
const fetch = require("node-fetch");


async function fetchDataFromAPI(Id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`);
		const data = await response.json();
		console.log(data.title);
		if (Id < 5 ) {
			await fetchDataFromAPI(Id + 1);
		}
	} catch (error) {
		console.error(error);
	}
}

// url = "https://jsonplaceholder.typicode.com/todos/1";
fetchDataFromAPI(1);
