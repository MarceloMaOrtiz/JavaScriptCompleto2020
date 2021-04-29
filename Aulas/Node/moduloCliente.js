const moduloA = require('./moduloA.js') // Utilizado para importar o módulo
const moduloB = require('./moduloB') // Por padrão já utiliza .js

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)