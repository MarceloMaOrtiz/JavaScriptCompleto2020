// Não acrescenta nada específico. É mais utilizado quando for trabalhar com React por exemplo.
// E também pode auxiliar quem já vem de outras linguagens uma familiaridade maior

class Lancamento{
    constructor(nome = 'Genérico', valor = 0) { // Será utilizado com o New
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidade = 0
        this.lancamentos.forEach( l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())