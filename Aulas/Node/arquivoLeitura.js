// Utilizado o filesystem -> presente no próprio Node
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono... Fica parado no event loop até ler o arquivo
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono... Piorizar essa leitura para arquivos maiores
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (!err){
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}: ${config.db.port}`)
    }
})

// Sincono... Porém uma forma muito mais simples de ler aquivo do formato JSON
const config = require('./arquivo.json') // Obrigatório passar o formato nesse caso
console.log(config.db) // OBS: Esse console foi impresso antes do presente no readFile, por conta da assincronicidade

// Leitura de pasta
fs.readdir(__dirname, (err, arquivos) => { // o __ é uma constante que está presente em todos os módulos do node
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})