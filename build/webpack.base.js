const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            // eslint
            // {
            //     enforce: 'pre',
            //     test: /.(js|jsx)$/,
            //     loader: 'eslint-loader',
            //     exclude: [
            //         path.join(__dirname, '../node_modules')
            //     ]
            // },
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
    }
};
