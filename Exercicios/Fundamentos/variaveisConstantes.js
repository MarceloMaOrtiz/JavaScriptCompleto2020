// Regra geral: Utilizar varáveis usando let


var a = 3

let b = 4

// Testando a saida para quando a variável é novamente instanciada

var a = 30

// Não é permitido instanciar novamente uma variável let
// let b = 40
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// Não é permitido alterar valor de variável const
// c = 50

console.log(c)
