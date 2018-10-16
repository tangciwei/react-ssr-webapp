const path = require('path');
let webpack = require('webpack');
let HTMLPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

let config = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/',
        filename: '[name].js'
        // filename: '[name].[hash].js'
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
