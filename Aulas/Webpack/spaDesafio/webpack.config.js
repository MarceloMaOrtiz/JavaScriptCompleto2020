// Utilizado para receber a variável de ambiente NODE_ENV direto da linha de comando, possibilitando
// o script "build" do package.json funcionar com o cross-env

const webpack = require('webpack')

const modoDev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000,
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}