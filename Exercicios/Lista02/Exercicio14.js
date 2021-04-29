// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:
//     Exemplos:
//         objetoParaArray({
//             nome: "Maria",
//             profissao: "Desenvolvedora de software"
//         }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
//         objetoParaArray({
//             codigo: 11111,
//             preco: 12000
//         }) // irá retornar [["codigo", 11111], ["preco", 12000]]

// Forma mais simples de resolver
// function objetoParaArray(objeto) {
//     return Object.entries(objeto)
// }

const objeto1 = { nome: "Maria", profissao: "Desenvolvedora de software" }
const objeto2 = { codigo: 11111, preco: 12000 }

console.log(Object.entries(objeto1))

const objetoParaArray = function (objeto) {
    const array = new Array
    for (const key in objeto){
        if (objeto.hasOwnProperty(key)){}
            array.push([key, objeto[key]])
    }
    return array
}

console.log(objetoParaArray(objeto1))