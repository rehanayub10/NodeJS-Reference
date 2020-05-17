const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./textfiles/randText.txt', 'utf8');
const writeStream = fs.createWriteStream('./textfiles/write2.txt.gz');

//console.log(readStream);

// readStream.on('data', chunk => {
//     //console.log(chunk);
//     writeStream.write(chunk);
//     //can write data in before it is fully loaded
// });
//Above is equivalent to below
//readStream.pipe(writeStream);
readStream.pipe(gzip).pipe(writeStream);