// Dependencia externas para a aplicação

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCss(callback) {
    gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({
            "uglycomments": false // Não remove os comentários, principalmente quando há licença
        }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
    
        return callback()
}

function depsFonts(callback) {
    gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
    return callback()
}

module.exports = {
    depsCss,
    depsFonts
}