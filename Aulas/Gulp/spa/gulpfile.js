// É o projeto mais complexo do Módulo. Possui sua próprias dependências.
// Será utilizado um servidor, e sempre que houver uma mudaça, será tudo
// recompilado e atualizado.

// Ao invés de colocar toda a build dentro de um único arquivo, o processo
// de build será quebrado em vários arquivos. Auxiliando na organização da build

// O JS será responsável pela navegação nessa SPA. A index.html irá ficar
// navegando pelas outras páginas html. O estilo da página está pré-codado
// nos arquivos Sass.

// Objetivo: Já temos todo código necessário para funcionar a SPA, o que falta
// é pegar todos os arquivos e gerar a build, de forma que o browser consiga
// compilar

// Antes de começar foi necessário instalar as dependências. '$ npm i'

// A Primeira coisa feita nesse projeto, foi montar a estrutura. Com a estrutura
// pronta já era possível executar o comando gulp, mesmo não ocorrendo nada demais

const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCss, appJs, appImg } = require('./src/gulpsTasks/app.js')
const { depsCss, depsFonts } = require('./src/gulpsTasks/deps.js')
const { monitorarArquivos, servidor } = require('./src/gulpsTasks/servidor.js')


module.exports.default = 
    series(
        parallel(
            series(
                appHtml, appCss, appJs, appImg
            ),
            series(
                depsCss, depsFonts,
            ),
        ),
        servidor,
        monitorarArquivos
    )