// Undefined possui endereço, enquanto null não

let valor
console.log(valor)
// console.log(valor.toString())

valor = null
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)