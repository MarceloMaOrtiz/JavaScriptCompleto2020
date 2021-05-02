// Enquanto o for in itera em cima do índice o for of itera em cima do valor

for (let letra of 'Cod3r')
    console.log(letra)

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma)
    console.log(i)

for (let i of assuntosEcma)
    console.log(i)

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log((assunto))
}

for (let [key, value] of assuntosMap) { // É possível utilizar destructuring e percorrer [ch, vl]
    console.log(key, value)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { // destructuring
    console.log(ch, vl)
}

const s = new Set (['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}