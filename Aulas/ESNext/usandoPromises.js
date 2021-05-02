// Promises
// Nessa aula está sendo utilizado recurso novo do ES

// Esse exemplo será utizado para comparar com a utilização do Callbacks, feito anteriormente, para fazer a mesma tarefa
// O Objetivo aqui é pegar as três listas de alunos via Json, e separar somente os nomes dos alunos

// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

const http = require('http') // Modulo específico do node. O Axios já resolveria o problema, inclusive utilizando promises

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => { // Evento on data, os dados vão chegando aos poucos e compondo o resultado
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

// Exemplo a partir da callback, mas mudando para promisse. O mais elegante seria utilizar o Promise.all()
// getTurma('A').then(alunos => {
//     // console.log(alunos)
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// Passa várias promisses, e quando todas as promisses forem resolvidas, começa as chamadas para os then()
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // Utilizando spread para separar os arrays em um único array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // Importante sempre manter o catch quando utilizar promises

// Um exemplo do catch
getTurma('D').catch(e => console.log(e.message))