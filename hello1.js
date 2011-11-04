var http = require('http');
var server = http.createServer(function(req, rsp) {
	rsp.writeHead(200, {"Content-Type": "text/plain"});
	rsp.end("Hello World\n");
});
server.listen(8000);
console.log("Server running at :8000");
