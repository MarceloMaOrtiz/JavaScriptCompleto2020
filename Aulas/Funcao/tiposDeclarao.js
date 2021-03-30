console.log(soma(3, 4))
// Function declaration -- Permite o acesso a função em linhas anteriores
function soma(x, y){
    return x + y
}
console.log(soma(3, 4))

// console.log(sub(3, 4)) // Não funciona pois ainda não foi instanciada
// Function expression
const sub = function(x, y){
    return x- y
}
console.log(sub(3, 4))

// console.log(mult(3, 4)) // Não funciona pois ainda não foi instanciada
// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))