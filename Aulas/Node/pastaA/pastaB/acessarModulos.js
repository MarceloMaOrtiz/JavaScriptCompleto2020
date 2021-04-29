const moduloA = require('../../moduloA') // require('../../moduloa') Não da problema em usar a minúsculo no Windows e Mac, mas no linux funciona

console.log(moduloA.ola)

// const c = require('./pastaC/index') // É possível importar diretamente utilizando o index.js
// Mas como o nome do arquivo já é index.js, não é necessário. Pois automaticamente ao encontrar a pastaC ele encontra o index.js
const c = require('./pastaC') 
console.log(c.ola2)

// // Modulo core, que já vem junto do Node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)