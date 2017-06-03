##初始化项目

npm init -y
##安装依赖包

开发依赖
```
npm install webpack webpack-dev-server babel-core babel-loader   babel-preset-react babel-preset-es2015 babel-preset-stage-0 style-loader css-loader less-loader less file-loader url-loader html-webpack-plugin -D
```

##生产依赖
```
npm install react react-dom -S
webpack 是打包的
webpack-dev-server 用来启动一个HTTP服务器预览我们的项目
babel-core babel-loader 进行转译，把es6 和react代码转义成es5
babel-preset-es2015 用来转义es6
babel-preset-stage-0 用来转义es7
babel-preset-react 用来转义react
style-loader css-loader 用来处理css
less-loader less 编译less
file-loader url-loader 用来处理资源文件
html-webpack-plugin 用来自动产出html文件
open-browser-webpack-plugin 自动打开浏览器
```