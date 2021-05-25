// gulp-concat -> Concatena os arquivos
// gulp-sass -> Pré-processador CSS
// gulp-typescript -> Integra gulp com typescript
// gulp-uglify -> Transforma todo arquivo JS bem formatado, removendo linhas e espaços
// gulp-uglifycss -> Transforma todo arquivo CSS bem formatado, removendo linhas e espaços

// Objetivo: Copiar o conteúdo do arquivo1.txt e arquivo2.txt para uma segunda pasta

// No gulp antigo só havia como utilizar tasks em parallel

// Quando '$ gulp' é executado na linha de comando, o gulp expera que naquela pasta
// haja um gulpfile.js. Ou utilizando '$ gulp --gulpfile LOCAL_ARQUIVO'

// Cada função representa uma task

const gulp = require('gulp')

// Obtendo a função series, utilizando destructuring
// const { series } = require('gulp')
// Obtendo a função series, a partir do gulp já instanciado
const series = gulp.series
const parallel = gulp.parallel

const antes1 = callback => {
    console.log('Tarefa Antes 1!')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes 2!')
    return callback()
}

// A callback será utilizada quando determinada tarefa for finalizada
function copiar(callback) {
    // Seleciona os arquivos para o workflow que será definido. Para selecionar múltiplos
    // arquivos, é só utilizar um array
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // Dessa forma qualquer arquivo txt será selecionado
    gulp.src('pastaA/**/*.txt')
        // Função pipe() para fazer (aplicar) tranformações nos arquivos definidos
        // A ideia básica consta em criar tasks (funções) que serão executadas
        // Mesmo a pasta não existindo, será criada automaticamente
        .pipe(gulp.dest('pastaB'))

        // Exemplos de uso com funções não criadas
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim!')
    return callback()
}

// O gulp espera por padrão uma tarefa chamada default, por isso a necessidade abaixo
// Necessário exportar a task default
module.exports.default = series( // Essa é a forma mais simples
    parallel(antes1, antes2), // Possível misturar tasks em series e parallel
    copiar,
    fim) 