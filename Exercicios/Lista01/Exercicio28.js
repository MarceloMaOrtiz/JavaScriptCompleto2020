// 28) ​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function conta_ParImpar(vetor){
    let par = 0, impar = 0
    for (let i in vetor){
        if (vetor[i] % 2)
            impar++
        else
            par++
    }
    console.log(`Pares: ${par}\nÍmpares: ${impar}`)
}

conta_ParImpar([23, 43, 12, 41, 22, 33, 46, 63, 61])