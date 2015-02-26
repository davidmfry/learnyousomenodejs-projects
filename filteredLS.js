var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(filePath,function(err, files){
	for (var file in files)
	{
		if (path.extname(files[file]) === ext)
			console.log(files[file]);
	}
});