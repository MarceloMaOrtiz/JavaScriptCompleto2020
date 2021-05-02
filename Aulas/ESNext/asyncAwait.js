// Trabalhando com conversão de funções entre async e await


// Async
// Nessa aula está sendo utilizado recurso novo do ES-8

// O Objetivo aqui é mostra como tranformar a função getTurma que é uma Promisse, logo assíncrona em síncrona
// Simplificando assim o uso do Promise

// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

const http = require('http') // Modulo específico do node. O Axios já resolveria o problema, inclusive utilizando promises

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => { // Promisse é uma função assincrona
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

// Marcar a função com a palavra Async, a palavra Await só vai funcionar em uma função que tiver marcada com Async
// Sempre que estiver utilizando uma função que está lidando com Promisse, é possível utilizar o Await
// Await faz com que a função só vá para o próximo passo quando esse passo for atendido ou rejeitado
let obterAlunos = async () => {
    // Dessa forma está sendo trabalhado de forma mais syncrona do que o próprio Promise
    const turmaA = await getTurma('A') // Atribuindo o resultado da getTurma('A') ao turma A, sem se preocupar com a utilização do then()
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    // Por mais que esteja utilizando qualquer tipo de dado, por exemplo um array, sempre será retornado um objeto AsyncFunction
    return [].concat(turmaA, turmaB, turmaC) 
}

// then() será utilizado nos objetos AsyncFunction
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))
    