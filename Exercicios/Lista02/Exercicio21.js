// Criar uma função que receba um array de números e retorne o menor número desse array.
//     Exemplos:
//         menorNumero([10, 5, 35, 65]) // retornará 5
//         menorNumero([5, -15, 50, 3]) // retornará -15

const menorNumero = array => array.reduce((acumulador, atual) => acumulador = acumulador > atual ? atual : acumulador)

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))