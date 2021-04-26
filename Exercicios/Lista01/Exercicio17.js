// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumenta_Salario(plano, salario){
    switch (plano){
        case 'A':
            console.log(`O novo salário é ${salario * 1.1}`)
            break
        case 'B':
            console.log(`O novo salário é ${salario * 1.15}`)
            break
        case 'C':
            console.log(`O novo salário é ${salario * 1.2}`)
            break
        default:
            console.log('O plano é inválido')
    }
}

aumenta_Salario('A', 10000)
aumenta_Salario('B', 10000)
aumenta_Salario('C', 10000)
aumenta_Salario('S', 10000)