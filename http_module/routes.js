const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === "/") {
		res.writeHead(200, {"content-type": "text/plain"});
		res.end("Home Page");
	} else if (url === "/projects") {
		res.writeHead(200, {"content-type": "text/plain"});
		res.end("Projects Page");
	} else {
		res.writeHead(404, {"content-type": "text/plain"});
		res.end("Page not found!");
	}
});

server.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
