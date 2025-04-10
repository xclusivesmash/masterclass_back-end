// import modules
const fetch = require('node-fetch');

// fetch data from an API.
async function fetchDataFromAPI(url) {
	try {
	  const response = await fetch(url);
	  const data = await response.json();
	  // console.log(data);
		return data.title;
	} catch (error) {
		console.error(error);
	}
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
// data = fetchDataFromAPI(url); // returns a promise
// log title to console.
console.log(fetchDataFromAPI(url).then((title) => {console.log(title)}));
