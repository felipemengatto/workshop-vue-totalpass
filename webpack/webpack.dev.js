const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'BASE_URL': JSON.stringify(''),
        }),
    ],
});