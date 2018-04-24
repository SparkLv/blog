const common = require('./webpack.config');
const webpack = require('webpack')
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',    
    output: {
        filename: 'static/js/[name].bundle.[chunkhash:8].js',
        //path为绝对路径
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        //每次打包清空dist目录,root为dist所在路径
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new webpack.optimize.CommonsChunkPlugin('common'),
        // new UglifyjsWebpackPlugin()
    ]
})