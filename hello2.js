var app = require('express').createServer()

app.get('/', function(req, rsp) {
	rsp.writeHead(200, {"Content-Type": "text/plain"});
	rsp.end("Hello World\n");
});
app.listen(8000);
console.log("Server running at :8000");
