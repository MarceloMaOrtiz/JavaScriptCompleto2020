const filhas = ['Uasleskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uecslei']
const todos = filhas.concat(filhos)
console.log(filhas.concat(filhos, 'Fulano', ['Ciclano', 'Cicrano']))
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7], [8, 9]]))