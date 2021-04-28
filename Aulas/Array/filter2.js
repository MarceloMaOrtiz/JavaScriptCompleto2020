Array.prototype.meuFilter = function(callback){
    const newArray = new Array
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this))
            newArray.push(this[i])
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}    
]

console.log(produtos.meuFilter(function(p){
    return p.preco > 2400
}))

const startsWith = function(valueToCompare){
    return function(element){
        return element.preco >= valueToCompare
    }
}

const verificaFragil = e => e.fragil

console.log(produtos.meuFilter(verificaFragil).meuFilter(startsWith(500)))