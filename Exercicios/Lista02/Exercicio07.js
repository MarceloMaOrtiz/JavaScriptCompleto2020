// Crie uma função que receba quatro números como parâmetro (numero, maximo, minimo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.
//     Exemplos:
//         estaEntre(10, 100, 50) // retornará true
//         estaEntre(16, 100, 160) // retornará false
//         estaEntre(3, 150, 3) // retornará false
//         estaEntre(3, 150, 3, true) // retornará true

const estaEntre = function (numero, maximo, minimo, inclusivo = false){
    if (numero == minimo || numero == maximo){
        return inclusivo ? true : false
    }
    else if (numero > minimo && numero < maximo)
        return true
    else
        return false
}

console.log(estaEntre(80, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true
