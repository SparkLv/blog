const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //入口文件使用对象形式，适用多页面
  entry: {
    //路径为相对于根目录
    index: "./src/index.js",
    art1: "./src/article/art1/index.js"
    // blog: './src/pages/blog.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      inject: "body",
      favicon: path.resolve(__dirname, "../favicon.ico"),
      title: "spark's blog",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "static/html/art1.html",
      template: path.resolve(__dirname, "../src/article/art1/index.html"),
      inject: "body",
      favicon: path.resolve(__dirname, "../favicon.ico"),
      title: "spark's blog",
      chunks: ["art1"]
    })
  ]
};
