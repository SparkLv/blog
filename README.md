# blog

## description

这是第三次重构个人博客，出于对`seo`的考量，加上本人作为前端对服务端渲染没有掌握，这次打算使用原生js来写，没有动态生成，只能是一篇文章一个html文件了。

---

## process

### 2018-03-11

---

项目开始阶段，要从架构方面加以考量。

* 前端方面
  * html方面似乎没有什么问题
  * css打算使用`postcss`处理兼容问题，更多的采用flex布局以及em、rem这种相对单位来适配移动端，预编译语言使用sass
  * js方面大量使用`ES6`搭配`babel`
  * 模块化工具当然要使用`webpack`
  * 自动化方面，由于项目比较简单gulp、grunt暂且不用
* 后端方面
  * 依旧打算使用newhomepage项目中的`php`作为服务端，个人也应更加深入的了解php。未来再次重构可能使用`vue`、`react`或者其他框架搭配后端`java`启用`服务端渲染`

* 兼容性
  * 兼容性方面，为了使博客更加酷炫，目标是兼容到`IE10`，为了方便用户，网页会检测版本，跳到升级页面

### 2018-03-14

---

webpack基础部分已经配置完毕,使用的插件、loader等如下,由于是多页面开发模式，所以只使用sass而不用css-module

1. `html-webpack-plugin`--自动生成html
1. `webpack.HotModuleReplacementPlugin`--热模块替换
1. `uglifyjs-webpack-plugin`--压缩
1. `clean-webpack-plugin`--打包时，清空一些文件
1. `webpack-dev-server`--本地服务
1. 样式loader--`sass-loader`,`postcss-loader`,`css-loader`,`style-loader`