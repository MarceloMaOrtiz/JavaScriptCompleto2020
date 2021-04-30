// Tagged Template -> Processa uma template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situação = 'Aprovado'
console.log(`${aluno} está ${situação}.`) // Sem a tag
console.log(tag `${aluno} está ${situação}.`) // Temos utilizando a Tag a separação do que foi interpolado e o que não é interpolado
// Auxilia em trabalhar separadamente com variáveis e textos, alterando o parser de uma string