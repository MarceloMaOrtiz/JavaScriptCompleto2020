// Objetivo: Existe a pasta src/sass, dentro dela há diversos códigos
// Sass, por enquanto ao executar o index.html os estilos não
// estão sendo lidos corretamente. A ideia é utilizar o gulp para
// transformar o Sass em CSS, posteriormente unir os CSS e mimificalos
// Por último gerar uma pasta com um arquivo final css/estilo.min.css

const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranformacaoCSS() {
    // Nesse caso não é necessário importar todos os arquivos, pois, o próprio arquivo
    // index.scss já está importando todos os outros
    return gulp.src('src/sass/index.scss')
        // on('error', func) é opcional para tratar erros. Não está sendo executada a função
        // sass.logError, e sim está sendo passada como parâmetro para a função on
        .pipe(sass().on('error', sass.logError)) 
        .pipe(uglifycss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css')) // O parâmetro é o nome que o arquivo terá
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

// module.exports.default = series(tranformacaoCSS)
module.exports.default = parallel(tranformacaoCSS, copiarHTML)