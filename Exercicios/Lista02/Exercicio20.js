// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.
// Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
//     Exemplos:
//         areaDoTriangulo(10, 15) // retornará 75.00
//         areaDoTriangulo(7, 9) // retornará 31.50
//         areaDoTriangulo(9.25, 13.1) // retornará 60.59

// toFixed(2) também poderia ser utilizado, ele também arredonda

const areaDoTriangulo = (base, altura) => Math.round(((base * altura / 2) + Number.EPSILON) * 100) / 100


console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))
