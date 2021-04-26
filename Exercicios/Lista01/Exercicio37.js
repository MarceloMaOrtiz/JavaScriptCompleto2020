// 37) ​ Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
// bem como a soma dos elementos.

function progressao_Aritmetica(n, a1, r){
    vetor = []
    for (let i = 1; i <= n; i++)
        vetor.push(a1 + (i - 1) * r)
    console.log('PA')
    console.log(`Vetor com n termos: ${vetor}`)
    console.log(`Soma dos elementos: ${(vetor[0] + vetor[vetor.length - 1]) * n / 2}`)
}

function progressao_Geometrica(n, a1, r){
    vetor = []
    for (let i = 1; i <= n; i++)
        vetor.push(a1 * Math.pow(r, (i - 1)))
    console.log('PG')
    console.log(`Vetor com n termos: ${vetor}`)
    console.log(`Soma dos elementros: ${a1 * (Math.pow(r, n) - 1)/(r - 1)}`)
}

progressao_Aritmetica(5, 2, 2)
progressao_Geometrica(5, 2, 2)