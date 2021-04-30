// Simulação de um Banco de Dados - Os dados estão persistindo na RAM

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = new Object

function salvarProduto(produto){
    if (!produto.id)
        produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function deleteProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    deleteProduto
}