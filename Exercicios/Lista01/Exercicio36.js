// 36) ​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

let multiplica = (vetor, numero) => vetor.map(function(e){
    return e*numero
})

let multiplica_Again = (vetor, numero) => numero <= 5 ? vetor : vetor.map(function(e){
    return e*numero
})

let vetor = [1, 2, 3, 4, 5, 6]

console.log(`Vetor antes = ${vetor}`)
vetor = multiplica(vetor, 4)
console.log(`Vetor primeira transformação = ${vetor}`)
vetor = multiplica_Again(vetor, 4)
console.log(`Vetor segunda tranformação = ${vetor}`)

vetor = [1, 2, 3, 4, 5, 6]

console.log(`Vetor antes = ${vetor}`)
vetor = multiplica(vetor, 6)
console.log(`Vetor primeira transformação = ${vetor}`)
vetor = multiplica_Again(vetor, 6)
console.log(`Vetor segunda tranformação = ${vetor}`)

