const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na última posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro elementos
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no ínicio do array
console.log(pilotos)

// Array.splice(x, y, z) // X é o elemento que quero trabalhar, y quantidade que quero excluir, z adiciona elemento
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionando elementos
console.log(pilotos)
pilotos.splice(3, 1) // Remove elementos
console.log(pilotos)

// Array.slice() // Pega um pedaço do array
const algunsPilotos1 = pilotos.slice(2) // Não altera a referência. Divide o array a partir da posição desejada
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Divide o array do intervalo [1,4[
console.log(algunsPilotos2)