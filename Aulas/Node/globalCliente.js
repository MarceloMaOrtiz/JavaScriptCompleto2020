// Testando o import do Global
require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!' // Uma ação interessante para evitar esse tipo de situação é utilizar o freeze() no modulo que esta sendo exportado
console.log(minhaApp.nome)
console.log(minhaApp)