// Fazer a leitura do arquivo dados.txt utilizando Promise, e a resposta será o conteúdo do arquivo, utilizando then
// Encapsular dentro da promise o readFile

const fs = require('fs')

const path = __dirname + '/dados.txt'

function lerArquivo(path) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(path, 'utf-8', (err, conteudo) => { // código executado Asyncronamente
                if (!err){
                    resolve(conteudo)
                }
                else
                    throw err
            })
        } catch (e){
            reject(e)
        }
    })
}

let dados = new String

lerArquivo(path)
    .then(conteudo => {
        dados = conteudo // Armazena a informação, porém necessário tomar cuidado com o Async
        console.log(conteudo)
        return `Mudando conteudo\n${conteudo}`
    })
    .then(console.log)
    .catch(e => console.log(e))

// A informação não é captada na hora, pois o Promise é async
console.log(dados)

// Testando com setTimeout -> A informação de fato é salva
setTimeout(() => {
    console.log(dados)
}, 5000)