const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

// const devServer = {
//     devServer: {
//         historyApiFallback: true,
//         hot: true,
//         inline: true,
//         stats: 'error-only',
//         host: '0.0.0.0',
//         port: '3000'
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin({
//             multiStep: true
//         })
//     ]
// }
module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'app/index.ejs',
            title: 'webpack demo',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'app'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'app'),
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
            }
        ]
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'error-only',
        host: '0.0.0.0',
        port: '3000'
    },
    devtool: 'eval-source-map'
}
