// Object.preventExtensions -> Previne determinado objeto de ser extendido, não irá ser possível adicionar novos atributos, é possível excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: '1.99',
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha' // É possível alterar
produto.descrição - 'Borracha escolar branca' // Não é possível adicionar novos atributos
delete produto.tag // É permitido remover atributos
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Não é possível inserir novos atributos
delete pessoa.nome // Não é possível deletar atributos
pessoa.idade = 29 // É possível alterar atributos
console.log(pessoa)

// Object.freeze = seal + preventExtensions