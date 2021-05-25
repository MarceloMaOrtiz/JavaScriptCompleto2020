// Um servidor básico que será utilizado para desenvolvimento, não deve ser utilizado em
// produção

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

// Muito simples e poderoso
function monitorarArquivos() {
    // Para utilizar a task 'appHtml', que foi definida no app.js das gulpsTaks
    // é necessário inserir ela como uma task do gulp lá no app.js
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.css', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assetes/imgs/**/*.*', () => gulp.series('appImgs')())
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}


module.exports = {
    monitorarArquivos,
    servidor
}