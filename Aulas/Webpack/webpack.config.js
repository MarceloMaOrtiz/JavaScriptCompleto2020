// Utilizado para receber a variável de ambiente NODE_ENV direto da linha de comando, possibilitando
// o script "build" do package.json funcionar com o cross-env
const modoDev = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // Primeira coisa é determinar se o módulo é development ou production
    // Development -> Gerará um arquivo legível, inclusive com os comentários
    // Production -> Gerará um arquivo de uma única linha, mimificado.
    mode: modoDev ? 'development' : 'production',
    // Ponto de entrada
    entry: './src/principal.js',
    // Altera a pasta e arquivo de saida. Padrão: /dist e main.js
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // __dirname -> Aponta para a pasta pai do arquivo
    },
    // Adicionando o webServer para development
    devServer: {
        contentBase: './public',
        port: 9000,
    },
    optimization: { // Aparentemente esse optimization só é executado quando em produção
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    // Utilizado para inserir plugins
    plugins: [
        new MiniCssExtractPlugin({ // função construtora
            filename: "estilo.css"
        })
    ],
    // Utilizado para acrescentar o loader para o css
    module: {
        rules: [{
            // Aterado a forma de encontrar os arquivos .css após inserir as dependencias relacionadas ao Sass
            // test: /\.css$/, // Para todos arquivos .css
            test: /\.s?[ac]ss$/, // Dessa forma os arquivos .sass ou .scss e o .css serão lidos
            use: [
                MiniCssExtractPlugin.loader, // Inserindo o .loader do plugin
                // 'style-loader' é conflitante em relação ao MiniCssExtractPlugin, por isso será comentado
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Responsável por interpretar o @import, url()...
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