// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
//     Exemplo:
//         recerberMelhorEstudante({
//             Joao: [8, 7.6, 8.9, 6],
//             Mariana: [9, 6.6, 7.9, 8],
//             Carla: [7, 7, 8, 9]
//         })

estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

const media = array => array.reduce((acumulador, numero) => acumulador + numero) / array.length

const arrayMedias = function(objeto){
    const newObj = new Object
    for (const key in objeto)
        newObj[key] = media(objeto[key])
    return newObj
}

console.log(arrayMedias(estudantes))

const melhorMedia = function(objeto){
    const newObj = new Object
    let maiorNota = 0
    let maiorNome = ''
    for (const key in objeto){
        if (maiorNota < objeto[key]){
            maiorNota = objeto[key]
            maiorNome = key
        }
    }
    newObj.nome = maiorNome
    newObj.media = maiorNota
    return newObj
}

console.log(melhorMedia(arrayMedias(estudantes)))

