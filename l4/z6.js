const fs = require('fs');

function printData(err, data) {
	  console.log(data);
}

fs.readFile('tekst.txt', 'utf8', printData);