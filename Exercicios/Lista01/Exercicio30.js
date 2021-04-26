// 30) ​ Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maior_Menor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i in vetor.slice(1, )){
        if (maior < vetor[i])
            maior = vetor[i]
        if (menor > vetor[i])
            menor = vetor[i]
    }
    console.log(`Maior: ${maior}\nMenor: ${menor}`)
}

maior_Menor([23, 43, 12, 41, 22, 33, 46, 63, 61])