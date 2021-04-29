// Será acessado um arquivo em http://files.cod3r.com.br/curso-js/funcionarios.json

url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// axios é uma biblioteca que faz requisições http
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// then é um novo recurso do ES2015
axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    // console.log(Object.entries(funcionarios))

    // Essa foi a primeira versão -> A primeira linha foi desnecessário, pois já tinhamos uma lista de objetos
    // let resposta = Object.entries(funcionarios).map(([index, obj]) => obj) // Tranformando em um array de objetos
    // resposta = resposta.filter(obj => (obj.pais == 'China' && obj.genero == 'F')) // Separando China e F
    // resposta = resposta.reduce((menor, atual) => menor.salario < atual.salario ? menor = menor : menor = atual) // Retorna o obj com menor salário
    // console.log(resposta)

    // Segunda versão, utilizada na aula
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

