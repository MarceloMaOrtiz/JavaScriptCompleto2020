// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function media(vetor){
    soma = 0
    for (let i in vetor)
        soma += vetor[i]
    console.log(`A média aritmética do vetor [${vetor}] é ${(soma / vetor.length).toFixed(2)}`)
}

media([12, 4, -23, -12, 43, -14, 66, 56, -43])