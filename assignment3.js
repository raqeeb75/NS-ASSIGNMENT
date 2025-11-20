//#Node.js cannot do everything at the same time, so it uses an event loop mechanism that decides which task should run now, which task should run later, and which task should wait.
//If a task takes time to complete, Node.js does not stop everything. It continues doing other tasks while the slow task runs in the background. When that task finishes, the event loop brings back the result and runs its callback.
//The event loop allows Node.js to handle many tasks without waiting, making it fast and non-blocking.







//Write to a file using streams
const fs = require('fs');
const writeStream = fs.createWriteStream('data.txt');
writeStream.write('Hello\n');
writeStream.write('This is written using streams.');
writeStream.end();


//Read a file using streams
const fs = require('fs');
const readStream = fs.createReadStream('data.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
readStream.on('end', () => {
    console.log('Done reading');
});
