// Enquanto o for in itera em cima do índice o for of itera em cima do valor

for (let letra of 'Cod3r')
    console.log(letra)

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma)
    console.log(i)

for (let i of assuntosEcma)
    console.log(i)

const assuntosMap = new Map([
    ['Map', { abordado}]
])