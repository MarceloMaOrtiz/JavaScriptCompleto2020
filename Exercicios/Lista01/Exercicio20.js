// 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function minimo_Notas(valor){
    let informacao = ``
    let quantidade_notas = 0
    if (parseInt(valor / 100) > 0){
        quantidade_notas = parseInt(valor / 100)
        informacao += `${quantidade_notas} nota(s) de R$100,00. `
        valor = valor % 100
    }
    if (parseInt(valor / 50) > 0){
        quantidade_notas = parseInt(valor / 50)
        informacao += `${quantidade_notas} nota(s) de R$50,00. `
        valor = valor % 50
    }
    if (parseInt(valor / 10) > 0){
        quantidade_notas = parseInt(valor / 10)
        informacao += `${quantidade_notas} nota(s) de R$10,00. `
        valor = valor % 10
    }
    if (parseInt(valor / 5) > 0){
        quantidade_notas = parseInt(valor / 5)
        informacao += `${quantidade_notas} nota(s) de R$5,00. `
        valor = valor % 5
    }
    if (parseInt(valor / 1) > 0){
        quantidade_notas = parseInt(valor/1)
        informacao += `${quantidade_notas} nota(s) de R$1,00.`
    }
    console.log(informacao)
}

minimo_Notas(4343232)
