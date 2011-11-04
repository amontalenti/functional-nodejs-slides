var app = require('express').createServer()
var i = 1;

app.get('/', function(req, rsp) {
	if (i === 3) {
		console.log("3rd request, about to spin CPU cycles needlessly");
		while (1) {}
	}
	rsp.writeHead(200, {"Content-Type": "text/plain"});
	rsp.end("Hello World " + i + "\n");
	i++;
});
app.listen(8000);
console.log("Server running at :8000");
