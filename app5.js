const fs = require('fs');
//fs.mkdir -> new directory
//rmdir -> delete folder

fs.readdir('textfiles', (err, files) => {
    if(err)
        console.log(err);
    else
        for(let file of files) {
            fs.unlink('./example/' + file, err => {
                if(err)
                    console.log(err);
                else
                    console.log('Successfully deletd file');
            });
        }
});