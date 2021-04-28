// Tomar cuidado com o For (in) - Existe tb for (of)
Array.prototype.meuMap = function(callback) {
    const newArray = new Array
    for (let i = 0; i < this.length; i++){ // Funcionou, iterou perfeitamente sobre a lista
        newArray.push(callback(this[i], i, this))
    }
    // for (let i of this){ // Funcionou, não retornou a função presente no this, porém tem o problema para enviar o index
    //     newArray.push(callback(i))
    // }
    // for (let i in this){ // Problema com for -> Retornando na última posição a function presente no this
    //     console.log('->', this[i])
    //     console.log(i)
    // }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


const jsonParseElement = e => JSON.parse(e)

const getPreco = e => e.preco

let resultado = carrinho.meuMap(jsonParseElement).meuMap(getPreco)

console.log(resultado)


