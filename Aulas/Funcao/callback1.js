// Conceito: É criada uma função que quando determinado evento ocorrer, essa função é chamada de volta

const fabricantes = ["Mercedes", "Audi", "MNW"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Função forEach é função de array. Para cada valor encontrado no array é feita a chamada para a função imprimir
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))