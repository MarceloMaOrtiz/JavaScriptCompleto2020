console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // Temos a disponível fora do arquivo
exports.b = 2 // Temos b disponível fora do arquivo
module.exports.c = 3 // Temos c disponível fora do arquivo

// Mesmo atribuindo null para exports, a variável modele.exports continua apontando para o que foi setado
// Então de fato o que é exportado é o module.exports. O exports portanto apontava para o endereço & de module.exports
exports = null
console.log(module.exports)

// Portanto ao utilizar o exports após aponta-lo para null, o novo objeto não é adicionado ao module.exports
exports = {
    nome: 'Teste'
}

// Não adianta, pois ao atribuir novamente é alterado a referencia de exports, por isso só é possível adicionar
// um campo ao objeto utilizando exports
exports = module.exports
exports = {
    nome: 'tentativa de corrigir'
}

// Agora está correto, estamos associando exports a referência do module.exports, e adicionando um novo campo
exports = module.exports
exports.nome = 'Ultimo teste'

console.log(module.exports)

// Como é o module.exports que de fato é exportado, dessa forma temos os dados da exportação sendo sobreescritos.
// Portanto com esse útlimo comando estamos enviando somente esse pequeno objeto com a exportação
module.exports = {
    publico: true
}