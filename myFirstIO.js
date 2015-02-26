var fs = require('fs');

var file = process.argv[2];
var buf = fs.readFileSync(file);

var newLineCount = buf.toString().split('\n').length - 1;


console.log(newLineCount);