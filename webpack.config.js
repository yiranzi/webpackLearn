/**
 * Created by wuchuck on 6/25/17.
 */
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    entry: {
        app: './src/main1/lodash_main.js',
        print: './src/main2/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'outPut M'
        })
    ],
    devServer: {
        contentBase: './dist'
    },

    // entry: './src/lodash_main.js',
        // entry: {

        // main1:'./src/entry.js',
        // vender1:['moment']

    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

}
