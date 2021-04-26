// 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

let composto = (capital, juros, parcelas) => console.log(`
Capital = R$${capital}
Juros = ${juros*100}% ao mes
Meses atrasadas = ${parcelas} meses
Juros Composto = ${capital * Math.pow(1 + juros, parcelas)}\n`)

function anuidade(mes, valor){
    meses_juros = mes - 1
    composto(valor, 0.05, meses_juros)
}

anuidade(1, 10000)
anuidade(3, 10000)
anuidade(5, 10000)
anuidade(8, 10000)