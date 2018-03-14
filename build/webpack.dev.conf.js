const common = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: 'static/js/[name].bundle.[hash:8].js',
        //path为绝对路径
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})