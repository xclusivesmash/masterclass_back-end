// import modules
const fetch = require("node-fetch");

/*
// fetch data from two APIs
async function fetchDataFromAPIs(API_one, API_two) {
	try {
		const array = [];
		const response_one = await fetch(API_one);
		const response_two = await fetch(API_two);
		const data_one = await response_one.json();
		const data_two = await response_two.json();
		array.push(data_one.title);
		array.push(data_two.title);
		// return array of titles
    return array;
	} catch (error) {
		console.error(error);
	}
}


url_one = "https://jsonplaceholder.typicode.com/todos/1";
url_two = "https://jsonplaceholder.typicode.com/todos/2";
myarray = fetchDataFromAPIs(url_one, url_two);
console.log(myarray.then((api_titles) => {
	console.log(api_titles[0]);
	console.log(api_titles[1]);
}));
*/

// second version
async function fetchDataFromAPIs(url_one, url_two) {
	try {
		const [response_one, response_two] = await Promise.all([
			fetch(url_one),
			fetch(url_two)
		]);
		const [data_one, data_two] = await Promise.all([
			response_one.json(),
			response_two.json()
		]);
		return [data_one.title, data_two.title];
	} catch (error) {
		console.error(error);
	}
}


url_one = "https://jsonplaceholder.typicode.com/todos/1";
url_two = "https://jsonplaceholder.typicode.com/todos/2";
fetchDataFromAPIs(url_one, url_two).then((value) => {console.log(value)});
