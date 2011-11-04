var fs = require('fs');
var lazy = require('lazy');
lazy(fs.createReadStream("/usr/share/dict/words"))
	.lines
	.forEach(function(line) {
		var line = line.toString();
		if (line.indexOf("hello") !== -1 || line.indexOf("world") !== -1) {
			console.log(line);
		}
	});
