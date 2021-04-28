console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não é o mais utilizado
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Mais comum
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Mario') // Mais comum, adiciona ao final

aprovados[9] = 'Walid' // Todos os elementos entre, que não existiam ficam com valores undefined
console.log(aprovados.length)
console.log(aprovados[9])
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort() // Ordena o array, alterando a referência
console.log(aprovados)

delete aprovados[1] // Mantei o espaço ocupado, com undefined

console.log(aprovados[1])

aprovados = aprovados.filter(e => e != null); // Filtra os elementos diferentes de undefined e null, removendo-os

console.log(aprovados)

// aprovados.splice(x, y, z) // X é o elemento que quero trabalhar, y quantidade que quero excluir, z adiciona elemento
aprovados.splice(1, 1, 'Emanuel', 'Laura') // Adiciona elementos em determinado indice, remove elementos a partir de determinado índice, ou faz os 2 ao mesmo tempo
console.log(aprovados)