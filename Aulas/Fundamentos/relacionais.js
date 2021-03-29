console.log('01)', '1' == 1) // Java verifica o valor
console.log('02)', '1' === 1) // Java verifica se é identico, inclusive o type
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Marco 0 da data
const d2 = new Date(0)

// Ambas são falsa, pois é comparado o endereço de memória
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())

console.log('13)', undefined === null)
console.log('13)', undefined == null)