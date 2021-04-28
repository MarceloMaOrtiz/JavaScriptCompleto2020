// Array.prototype.reduce(callback(x, y, z), valorInicial) -> x = valorAnterior, y = valorAtual, z = indice, valorInicial (opicional)
// Função utilizada para transformar um array em alguma informação acumulativa, conceito de agregação

const alunos = [
    { aluno: 'João', nota: 7.3, bolsista: false},
    { aluno: 'Maria', nota: 9.2, bolsista: true},
    { aluno: 'Pedro', nota: 9.8, bolsista: false},
    { aluno: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)