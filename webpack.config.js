/**
 * Created by wuchuck on 6/25/17.
 */
var path = require('path');

    module.exports = {
    entry: './src/main1/lodash_main.js',
    // entry: './src/lodash_main.js',
        // entry: {

        // main1:'./src/entry.js',
        // vender1:['moment']

    // },
    output: {
        // filename: 'bundle.js',
        filename: 'bundle.js',
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
