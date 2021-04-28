const alunos = [
    { aluno: 'João', nota: 7.3, bolsista: false},
    { aluno: 'Maria', nota: 9.2, bolsista: true},
    { aluno: 'Pedro', nota: 9.8, bolsista: false},
    { aluno: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?

const statusBolsa = alunos.map(e => e.bolsista)

console.log(statusBolsa)

// const verificaTodosBolsistas = (acumulador, atual) => acumulador && atual
const verificaTodosBolsistas = function(acumulador, atual) {
    return acumulador && atual
}

// const verificaAlgumBolsista = (acumulador, atual) => acumulador || atual
const verificaAlgumBolsista = function(acumulador, atual) {
    return acumulador || atual
}

console.log(`Todos os alunos são bolsistas? R: ${statusBolsa.reduce(verificaTodosBolsistas) ? 'Sim' : 'Não'}`)
console.log(`Algum aluno é bolsista? R: ${statusBolsa.reduce(verificaAlgumBolsista) ? 'Sim' : 'Não'}`)