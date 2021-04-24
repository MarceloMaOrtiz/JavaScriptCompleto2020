// Teste
console.log(0.1+0.2)

function converteReal(valor){
    valor = valor.toFixed(2)
    valor = valor.toString()
    valor = valor.replace('.', ',')
    valor = 'R$' + valor
    return valor
}

let valor = converteReal(0.1+0.2)

console.log(`0.1 + 0.2 = ${valor}`)