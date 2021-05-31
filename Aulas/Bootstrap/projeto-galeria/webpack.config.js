const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // Se na flag veio a variável production na flag do npm utiliza 'production'
    mode: modoDev ? 'development' : 'production',
    // Arquivo de entrada
    entry: './src/index.js',
    // Inicia um servidor web para development, que lerá os arquivos './build', que não será
    // criado enquanto utilizado o mode: 'development'
    devServer: {
        contentBase: './build',
        port: 9000,
    },
    // Configuração dos mimificadores, tanto para JS, quanto para CSS
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    // A saída, que gera tanto o arquivo 'app.js', quanto a pasta '/build'
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    // Plugins. 1º para extrair css. 2º para copiar as 'imgs' e os 'html' para pasta '/build'
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin([
            { context: 'src/', from: '**/*.html' },
            { context: 'src/', from: 'imgs/**/*' }
        ])
    ],
    // Regras para trabalhar com o scss, sass e css. imgs loader. Regras de fontes
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }]
    }
}