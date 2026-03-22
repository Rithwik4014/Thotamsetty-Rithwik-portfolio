const fs = require('fs');
const pdf = require('pdf-parse');

const filePath = 'C:\\Users\\rithw\\OneDrive\\Desktop\\T Rithwik Cv.pdf';
let dataBuffer;
try {
    dataBuffer = fs.readFileSync(filePath);
} catch (e) {
    console.error("Could not read file at " + filePath);
    process.exit(1);
}

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(err) {
    console.error(err);
});
