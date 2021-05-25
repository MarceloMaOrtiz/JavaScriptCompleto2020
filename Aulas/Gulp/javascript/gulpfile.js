// Objetivo: Desenvolver um workflow para concatenar o JS da calculadora
// e o JS do testeCalculado. Aplicar o Babel para gerar uma versão mais compatível
// com os browser. Por fim, mimificar o arquivo gerado 

const gulp = require('gulp')

const series = gulp.series

const gulpConcat = require('gulp-concat')
const gulpUglify = require('gulp-uglify')
const gulpBabel = require('gulp-babel')

function tranformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        .pipe(gulpBabel({ // É passado um objeto de config para o Babel
            comments: false, // Os comentários não serão adicionados ao arquivo final
            presets: ["env"] // Vai pegar o JS mais novo possível
        }))
        .pipe(gulpUglify())
        .on('error', e => console.log(e)) // Função que capta determiando evento
        .pipe(gulpConcat('codigo.min.js')) // Por parâmetro passa o arquivo que será gerado ao final
        .pipe(gulp.dest('build')) // Define o destino (pasta) em que o arquivo será enviado
    
    // É possível adicionar simplesmente um return ao flow do gulp
    // return callback()
}

function fim(callback) {
    // Ele considerar a callback vazia como uma função de aviso de done
    console.log(callback, ' Fim!!')
    return callback()
}

module.exports.default = series(tranformacaoJS, fim)