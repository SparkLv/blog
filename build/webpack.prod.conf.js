const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
    output: {
        filename: 'static/js/[name].bundle.[chunkhash:8].js',
        //path为绝对路径
        path: __dirname + '/dist',
    }
})