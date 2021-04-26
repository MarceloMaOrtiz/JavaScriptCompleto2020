// 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.


function notas_Func(cod_aluno, nota1, nota2, nota3){
    notas = []
    if (cod_aluno < 0)
        return -1
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    notas.sort((a, b) => a < b ? 1 : -1) // Interessante, altera o funcionamento padrão da função sort

    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(
`   Aluno: ${cod_aluno}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Media Ponderada: ${media}
    Situação: ${media >= 5 ? 'Aprovado' : 'Reprovado'}`)
}

notas_Func(123, 6, 5, 4)
notas_Func(321, 4, 5, 4)