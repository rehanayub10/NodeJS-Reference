const fs = require('fs');
const readStream = fs.createReadStream('./textfiles/randText.txt', 'utf8');
const writeStream = fs.createWriteStream('./textfiles/write2.txt');

//console.log(readStream);

readStream.on('data', chunk => {
    //console.log(chunk);
    writeStream.write(chunk);
    //can write data in before it is fully loaded
});
