// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tira os atributos selecionados do objeto pessoa
const { nome, idade } = pessoa // As chaves representam o operador destruct

console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa
console.log(n, i)

// Caso não encontre um valor o programa utiliza a atribuição
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

// Erro, não existe caminho até o ag ou num
// const {conta: {ag, num }} = pessoa