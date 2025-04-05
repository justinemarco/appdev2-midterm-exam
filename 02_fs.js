const fs = require("fs");

fs.writeFile('message.txt', "Node.js is awesome!", (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`File has been created`);
    }
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('File not found');
    } else {
        console.log('File content: ', data);
    }
});

fs.unlink('message.txt', (err) => {
    if (err) {
        console.log('Error deleting this file', err);
    } else {
        console.log('File has been deleted successfully');
    }
});