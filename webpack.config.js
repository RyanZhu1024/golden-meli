const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const devServer = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'error-only',
        host: '0.0.0.0',
        port: '3000'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ]
}
module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'webpack demo'
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ],
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
