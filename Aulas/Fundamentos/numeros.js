// Algumas funções para number

const peso1 = 1.0 // number
const peso2 = Number('2.0') // cast

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifica se determinado number é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2)) // Delimita casas decimais
console.log(media.toString(2)) // Converte para string && o 2 converte para binário
console.log(typeof media)
console.log(typeof Number) // Função && number = type