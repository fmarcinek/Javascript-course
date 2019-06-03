const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
    input: fs.createReadStream('logiWWW.txt'),
});


var selected = [];
rl.on('line', (line) => {
    var spl = line.split(' ');
    selected.push([spl[1],spl[4]]);
});

rl.on('close',() => {
    selected.sort((a,b) => { return b[1]-a[1]; });
    for (let i = 0; i < 12; i++) {
        console.log(selected[i][0],' ',selected[i][1]);
    }
});