const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

// Array.forEach(x, y, z) => x = value, y = indice, z = próprio Array

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)