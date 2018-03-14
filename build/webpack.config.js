const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
    //入口文件使用对象形式，适用多页面
    entry: {
        //路径为相对于根目录
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "../src/index.html"),
            inject: "body",
            favicon: path.resolve(__dirname, "../favicon.ico"),
            title: "spark's blog",
            chunks: ['index']
        }),
    ]
}