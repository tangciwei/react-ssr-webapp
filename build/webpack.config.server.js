const path = require('path');
let base = require('./webpack.base.js');
let merge = require('webpack-merge');

module.exports = merge(base, {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
    }
});
