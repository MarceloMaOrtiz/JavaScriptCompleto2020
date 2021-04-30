// ES-6

// Arrow Function
const soma = (a, b) => a + b // Implicitamente o return é chamado
console.log(soma(2, 3))

const subtracao = (a, b) => { // Com a chaves é obrigatório o uso do return
    return a - b
}
console.log(subtracao(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // This sempre é associado ao local que essa função foi escrita
const lexico2 = lexico1.bind({}) // o Bind aponta para o objeto definido. Mas no caso da arrow function, continua sendo associado ao local
lexico1()
lexico2()

// Paramêtros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('Texto')

// Rest (junta) -> Função . Spread (espalha) -> Array, Objeto
function total(...numeros) { // Agrupa vários parâmetros em uma estrutura do tipo Array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))