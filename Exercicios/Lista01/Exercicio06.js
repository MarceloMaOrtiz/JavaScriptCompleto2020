// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

let simples = (capital, juros, parcelas) => console.log(`
Capital = R$${capital}
Juros = ${juros*100}% ao mes
Parcelas = ${parcelas} meses
Juros Simples = ${capital * (1 + juros * parcelas)}\n`)

let composto = (capital, juros, parcelas) => console.log(`
Capital = R$${capital}
Juros = ${juros*100}% ao mes
Parcelas = ${parcelas} meses
Juros Composto = ${capital * Math.pow(1 + juros, parcelas)}\n`)

simples(1000, 0.05, 15)
composto(1000, 0.05, 15)
simples(5000, 0.1, 8)
composto(5000, 0.1, 8)