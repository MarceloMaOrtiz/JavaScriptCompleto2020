// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero){
    if (numero == 0)
        return 1
    else
        return fatorial(numero-1) * numero
}

console.log(fatorial(4))
console.log(fatorial(2))
console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(10))