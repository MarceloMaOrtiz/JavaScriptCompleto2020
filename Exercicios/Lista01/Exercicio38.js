// 38) ​ Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function impares(num1 = 0, num2 = 100){
    if (num1 > num2)
        num1 = [num2, num2 = num1][0]
    for (let i = num1; i < num2; i++){
        if (i % 2)
            console.log(i)
    }
}

impares(30, 58)
impares(75, 32)
impares()