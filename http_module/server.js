const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
	console.log(req.url);
	res.writeHead(200, {"content-type": "text/plain"});
	res.end("Home Page");
})

server.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
})
