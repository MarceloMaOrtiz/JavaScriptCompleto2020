// Array.prototype.filter(calback(x, y, z), thisArgs) -> x é o elemento, y o índice, e z o array, thisArgs (Opicional)
// Utilizado para filtrar o array, dada uma função que percorrerá o array, quando o retorno for true
// o array é inserido, caso contrário não é inserido

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}    
]

console.log(produtos.filter(function(p){
    return p.preco > 2400
}))

// Para utilizar um parâmetro extra no filtro, como a passagem de um valor para comparação
// foi necessário criar uma função que retornará uma outra função, essa outra função é a função
// callback que o filter espera receber. Com isso temos um callback(x, y, z), já setado com um valor
// para comparação que foi feito com o valueToCompare
const startsWith = function(valueToCompare){
    return function(element){
        return element.preco >= valueToCompare
    }
}

const verificaFragil = e => e.fragil

console.log(produtos.filter(verificaFragil).filter(startsWith(500)))