// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
//     Exemplo:
//         multiplicar(5, 5) // retornará 25
//         multiplicar(0, 7) // retornará 0

const multiplicar = function (num1, num2) {
    let resultado = 0
    for (let i = 1; i <= num1; i++)
        resultado += num2
    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))