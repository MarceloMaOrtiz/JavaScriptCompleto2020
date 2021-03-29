const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[5]) // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // Insere
console.log(valores)

console.log(valores.pop()) // Retira ultimo elemente
delete valores[0] // Deleta o valor
console.log(valores)

console.log(typeof valores)