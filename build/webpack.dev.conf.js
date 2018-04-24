const common = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    devtool:'cheap-module-source-map',
    output: {
        filename: 'static/js/[name].bundle.[hash:8].js',
        //path为绝对路径
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        inline:true,
        port: '3080',
        host: '0.0.0.0',
        disableHostCheck: true,
        public: 'http://localhost:3080'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})