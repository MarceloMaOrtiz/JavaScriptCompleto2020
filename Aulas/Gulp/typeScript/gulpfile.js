// Objetivo: Converter o código TypeScript para JavaScript

// O arquivo tsconfig.json está armazendado diversas opções de configuração
// para quando formos desenvolver a solução. Temos nessa configuração, por exemplo,
// a seleção do target como sendo o ES5, que é uma versão do JS que não possuia classes

const gulp = require('gulp')
const series = gulp.series
const ts = require('gulp-typescript')
const { ModuleResolutionKind } = require('typescript')
// São as configurações que o ts irá utilizar
const tsProject = ts.createProject('tsconfig.json')

function transformacaoJS() {
    // Não é necessário informar o objeto ao src, pois no tsconfig.json já foi feito
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoJS)