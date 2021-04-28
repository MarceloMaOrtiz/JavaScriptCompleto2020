// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
//     Exemplos:
//         maiorOuIgual(0, 0) // retornará true
//         maiorOuIgual(0, "0") // retornará false
//         maiorOuIgual(5, 1) // retornará false

const maiorOuIgual = function(num1, num2){
    if (typeof(num1) === typeof(num2))
        return num1 >= num2 ? true : false
    else
        return false
}

console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(0, "0"))
