// Cria de forma literal
function fun1(){ }

// Armazena em uma variável
const fun2 = function () { }

// Armazena dentro de array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

// Armazena em atributo de objeto
const obj = { }
obj.falar = function() { return 'Opa' }

console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun()
}

// Enta sendo executada dentro da função run()
run (function () {console.log('Executando...')})

// Função pode retornar/conter uma função
function some(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

let soma = some(3, 5)
soma(4)

soma = some(3, 5)(4)