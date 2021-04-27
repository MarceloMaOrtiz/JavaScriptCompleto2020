// Coleção dinâmica de paras chave/valor
const produto = new Object // Construtor
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' // Dessa forma é possível utilizar espaços, mas limite a esse tipo de utilização
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
        nome: 'Junior',
        idade: 19
        },{
        nome: 'Ana',
        idade: 42
        }
    ],
    calcularValorSegura: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSegura

console.log(carro)
console.log(carro.condutores)
// console.log(carro.condutores.length) // Erro, tentando acessar algo undefined