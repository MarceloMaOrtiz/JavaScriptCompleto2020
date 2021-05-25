// Tasks do gulp relacionadas ao código da aplicação

const gulp = require('gulp')

const babel = require('gulp-babel')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(callback) {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // Remove os espaços em branco
        }))
        .pipe(gulp.dest('build'))
    return callback()
}

function appCss(callback) {
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
    return callback()
}

function appJs() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appImg(callback) {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml)
gulp.task('appCss', appCss)
gulp.task('appJs', appJs)
gulp.task('appImg', appImg)

module.exports = {
    appHtml,
    appCss,
    appJs,
    appImg
}