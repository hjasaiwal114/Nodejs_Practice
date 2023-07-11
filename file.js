const fs  = require('fs');


// creating file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// writing files

// fs.writeFile('./docs/blog1.txt', 'hello world',() => {
//     console.log('File was written');
// });

// directories
if ( !fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}




// deleting files
