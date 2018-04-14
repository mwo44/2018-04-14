const {resolve} = require("path");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:  "./js/main.js",
    output: {
        path: resolve(__dirname, "build/"),
        filename: "main.boundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
            ]
        }
    ]   
    },
    plugins: [
        new HTMLWebpackPlugin({
                template: "./index.html"
            })
    ]
};