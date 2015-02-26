var fs = require('fs');
var path = require('path');

module.exports = function (filePath, ext, callback) {
	fs.readdir(filePath,function(err, files){
		var data = [];
		if (err)
			return callback(err);
		
		for (var file in files)
		{
			if (path.extname(files[file]) === "." + ext)
			{
				data.push(files[file]);
				console.log(files[file]);
			}
		}
		callback(null, data);
	});
	
};