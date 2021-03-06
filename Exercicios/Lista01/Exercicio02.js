// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(ladoA, ladoB, ladoC){
    if (ladoA == ladoB){
        if (ladoB == ladoC)
            console.log("O triângulo é Equilatero.")
        else
            console.log("O triângulo é Isósceles.")
    }   
    else if (ladoA == ladoC)
        console.log("O triângulo é Isósceles.")
    else
        if (ladoB == ladoC)
            console.log("O triângulo é Isósceles.")
        else
            console.log("O triângulo é Escaleno")
}

triangulo(10,10,10) // Equilatero
triangulo(6,6,4) // Isósceles
triangulo(6,4,6) // Isósceles
triangulo(4,6,6) // Isósceles
triangulo(4,5,6) // Escaleno