// 31) ​ Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function negativos(vetor){
    let contador = 0
    for (let i in vetor)
        if (vetor[i] < 0)
            contador++
    console.log(`A quantidade de números negativos no vetor é ${contador}`)
}

negativos([12, 4, -23, -12, 43, -14, 66, 56, -43])