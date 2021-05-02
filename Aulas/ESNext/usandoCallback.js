// Callback Aninhados
// Nessa aula não está sendo utilizado nenhum recurso novo do ES

// Esse exemplo será utizado para comparar posteriormente com a utilização do Promises para fazer a mesma tarefa
// O Objetivo aqui é pegar as três listas de alunos via Json, e separar somente os nomes dos alunos

// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

const http = require('http') // Modulo específico do node. O Axios já resolveria o problema, inclusive utilizando promises

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => { // Evento on data, os dados vão chegando aos poucos e compondo o resultado
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
// Essa estratégia é conhecida como callback hell
getTurma('A', alunos => {
    // console.log(alunos)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})