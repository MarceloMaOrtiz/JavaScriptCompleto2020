// 33) ​ Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [4, 7, 2, 3]
const vetorString = ['quatro', 'sete', 'dois', 'três']
const vetorDouble = [4.0, 7.0, 2.0, 3.0]

console.log(vetorInteiro.concat(vetorString, vetorDouble))
console.log(vetorString.concat(vetorDouble, vetorInteiro))