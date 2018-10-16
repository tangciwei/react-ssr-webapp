const path = require('path');
const fs = require('fs');
const express = require('express');

let ReactSSR = require('react-dom/server');

const serverEntry = require('../dist/server-entry').default;
let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

console.log(serverEntry)

let app = express();

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
	
    const appString = ReactSSR.renderToString(serverEntry);
    console.log(appString)
    let result = template.replace('<app></app>', appString);

    res.send(result);

});

app.listen(3333, function () {
    console.log('listening 3333');
});
