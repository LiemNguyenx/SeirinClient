const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/src/public'),
        filename: 'bundle_index.js'
    },
    devServer: {
        inline: true,
        port: 8080
     },
    module: {
        rules: [
           {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                 presets: ['@babel/env', '@babel/react']
              }
           }
        ]
     },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        })
    ]
}