const path = require('path');
let webpack = require('webpack');
let HTMLPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base.js');
const isDev = process.env.NODE_ENV === 'development';

let config = merge(base, {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].js'
        // filename: '[name].[hash].js'
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
});

if (isDev) {
    config.devServer = {
        // 本机
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        // 显示错误弹框
        overlay: {
            errors: true
        },
        publicPath: '/public',
        historyApiFallback: {
            // 404的请求全部返回下面这个
            index: '/public/index.html'
        }
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.entry = {
        app: [
            // 热更新需要用到
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]

    };
}

module.exports = config;
