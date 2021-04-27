// Pessoa -> &123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> &321 -> {...}
// pessoa = {nome: 'Ana'} // Error, tentando alterar o endereço de algo que é const
// console.log(pessoa)

Object.freeze(pessoa) // Congela o objeto pessoa, impedindo qualquer alteração
pessoa.nome = 'Maria' // A alteração não ocorre, é ignorada
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)