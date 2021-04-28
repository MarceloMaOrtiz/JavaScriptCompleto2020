const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// Tomar cuidado com for (in) -> Teve uma situação que ele retornou informações adicionais, exercício map3.js
for (let i in notas) {
    console.log(i, ' ', notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}