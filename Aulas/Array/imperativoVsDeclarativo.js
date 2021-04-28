const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2}
]

// Imperativo - Aparentemente há menos reuso - Foco em como tem que feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo - Aparentemente há mais reuso - Foco em o que tem que ser feito - Tem mais haver com paradigma Funcional
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Banco SQL se comunica de forma Declarativa
// SELECT codigo, nome, email FROM clientes WHERE ativo = 1 // Abordagem mais declarativa