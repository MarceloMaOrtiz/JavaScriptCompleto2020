
function criarProduto(nome, preco){
    return{
        nome, // Ou nome: nome,
        preco, // Ou preco: preco,
        desconto: 0.09
    }
}

console.log(criarProduto('Maça', 1.00))
console.log(criarProduto('Pera', 1.50))