// Não é possível termos chaves com mesmo valor, não aceita repetição
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angulas', { framework: true })

console.log(tecnologias.react) // Não funciona
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([  // Arrays de Array
    [function () { }, 'Função'],
    [{ }, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((value, key) => { // Na callback do forEach é passado primeiro o valor depois o índice
    console.log(key, value)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)