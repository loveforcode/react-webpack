var webpack = require('webpack');
let path = require("path");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

let cssLoaders = ["style-loader", "css-loader","sass-loader"]

module.exports = {
    devtool: 'eval-source-map',
    // 唯一入口文件
    entry: __dirname + "/src/main.js",
    // 输出目录
    output: {
        // 打包后的js文件存放的地方
        // path: __dirname + "/build",
        // 打包后的js文件名
        // filename: "bundle.js",
        path: __dirname,
        filename: "bundle.js"

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                // use 可以是一个数组里面传入一个个的对象的形式，作为简单配置也可以是直接字符串的简写形式
                use: cssLoaders
            },
            {            
                test: /\.jsx?$/,
                exclude: /node_moudles/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        // 热模块替换插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../"),
            
        })
        // new ExtractTextPlugin();
    ],
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true,
        port: 3000
    }
};