const path = require('path');
let HTMLPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            // 这里js和jsx要分开
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]

            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
};
