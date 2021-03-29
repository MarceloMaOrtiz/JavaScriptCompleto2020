// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito - Pela ausência de chaves a função executará uma única linha e retornará
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')