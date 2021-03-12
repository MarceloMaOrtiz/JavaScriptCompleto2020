console.log(7/0) // Retorna Infinity
console.log('10'/2) // Funciona, é verificado a possibilidade de converter a string para number
console.log('show!'*2) // Not a number -- NaN
console.log(0.1+0.7) // Uma especificação é utilizada para manter a velocidade da linguagem, mas perde o mínimo de precisão - IEEE
// console.log(10.toString()) // Não funciona, mas entre () sim
console.log((10).toString())
console.log('3' + 2) // Concatena, pois string tem preferência
console.log(3 + '2') // Concatena, pois string tem preferência
console.log('3' - 2) // Subtrai, pois não consegue trabalhar como string