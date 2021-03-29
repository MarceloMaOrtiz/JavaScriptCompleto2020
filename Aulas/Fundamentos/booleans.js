let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // Retornara o valor inteiro
console.log(!!isAtivo) // A Negação transforma em boolean e a segunda negação pro valor correto
console.log(Boolean(isAtivo)) // Cast

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || null || 0))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Conhecido'
console.log(nome || 'Desconhecido')