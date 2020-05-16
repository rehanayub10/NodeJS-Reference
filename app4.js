const fs = require('fs');

//create a file
// fs.writeFile('textfiles/example2.txt', "Sample file", err => {
//     if(err)
//         console.log(err);
//     else
//         console.log("File successfully created");
//         fs.readFile('textfiles/example.txt','utf8',(err,file) => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
// });

// fs.appendFile('example.txt', 'Appended data', err => {
//     if(err) 
//         console.log(err);
//     else
//         console.log("Successfully appended data");
// });

fs.unlink('textfiles/example2.txt', err => {
    if(err)
        console.log(err);
    else
        console.log("Deleted");
});
