const path = require('path');
const fs = require('fs');
const express = require('express');

let ReactSSR = require('react-dom/server');

const serverEntry = require('../dist/server-entry').default;
let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

let app = express();

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {

    const appString = ReactSSR.renderToString(serverEntry);
    let result = template.replace('<!-- app -->', appString);

    res.send(result);

});

app.listen(3333, function () {
    console.log('listening 3333');
});
