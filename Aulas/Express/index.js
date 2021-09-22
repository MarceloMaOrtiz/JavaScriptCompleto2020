// Importando Express
const express = require('express')

// Importanto BodyParser
const bodyParser = require('body-parser')

// Instancia um app express
const app = express()

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario.js')

// Exemplo diferente para comunicação entre módulos
// Nesse caso já é possível passar os parâmetros para as funções,
//  já que isso é uma função. Dessa forma está sendo executado o
//  modulo produto
// require('./api/produto')(app, 'Com param')
// Além disso era possível utilizar o que já vinhamos utilizando
const produtoApi = require('./api/produto')
produtoApi(app, 'Com param')

// Exemplo simples de comunicação entre módulos
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

// Exemplo diferente, possibilita inserir os método http dentro
//  do novo módulo, já que o módulo recebe o app

// É possível chamarmos uma função diretamente com o Use, que
//  o express funcionará perfeitamente, e ainda enviará os
//  parâmetros para a função. Mas ainda assim, as funções
//  seguintes não serão chamadas, pois não há dentro do saudacao
//  a funçção next()
// app.use(saudacao)
// Caso tente enviar um parâmetro na função, será gerado um erro
//  dizendo que a função precisa ser um middleware, portanto,
//  para corrigir é necessário retornar na função externa uma
//  middleware function
app.use(saudacao('Jão Toin'))

// Temos um comportamento similar ao saudacao. Portanto dentro
//  do BodyParser temos o retorna de uma função middleware, e
//  sempre que recebido na requisição um body é feito automaticamente
//  um parser. Para acessar esse dado é só utilizar, posteriormente,
//  req.body
app.use(bodyParser.text())
// Podemos chamar outra função middleware, agora para fazer o parse
//  para um json. Dessa forma teremos disponível dentro do req.body
//  um objeto, e não mais um texto comum
app.use(bodyParser.json())
// Nesse caso será feito o parser em cima de uma urlEncoded, que
//  normalmente é utilizado por um formulário no Front-End 
app.use(bodyParser.urlencoded({extended: true}))

// Função Middleware - Caso colocado antes da função GET, essa
//  função será chamada, e a função GET não. Portanto a Ordem faz
//  diferença
// app.use('/bem', (req, res) => {
//     console.log('Será que serei chamado?')
// })
// Nesse caso temos o incremento do next(), possibilitando executar
//  uma próxima função e não para a execução
// app.use('/bem', (req, res, next) => {
// Caso remover a URL, '/bem', todas as requisições passarão por aqui
app.use((req, res, next) => { 
// console.log('Será que serei chamado?')
    console.log('Antes')
    next()
})

// Nesse caso ao invés dos dados serem passados diretamente na URL,
//  que normalmente é feito dessa forma quando utilizado o GET,
//  os dados serão passados dentro da query da URL
//  http://localhost:3000/clientes/relatorio?completo=true&ano=2018
// Essa função foi movida para cima, em relação a de baixo, pois
//  ela é mais específica, caso deixasse ela abaixo, quando chamada,
//  o id se tornaria o relatorio, entrando na função errada
app.get('/clientes/relatorio', (req, res) => {
// No caso do Post, normalmente os dados são enviados no body da req
//  e não na query presente na URL. Dessa forma funcionaria, mas não
//  é a ideal
// app.post('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo: ${req.query.completo ? "Sim" : "Nao"}; Ano: ${req.query.ano}`)
})

// Função para obter dados do body do req sem utilizar bodyParser.
//  Forma mais complicada. A complicação existe, pois não é fácil
//  controlar qual o tipo de dado que está sendo recebido
app.post('/corpo', (req, res) => {
    // let corpo = ''
    // // Função que é disparada quando está recebendo dados no corpo,
    // //  podendo nesse caso ser uma streaming de dados
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // // Quando terminar a requisição é retornado algo 
    // req.on('end', function() {
    //     res.send(corpo)
    // })
    // Utilizando bodyParser facilita muito, a função já foi
    //  iniciado acima, permitindo o uso
    res.send(req.body)
    // No caso de recebermos o json, o parse transforma em objeto,
    //  possibilitando o uso
    // res.send(req.body.nome)
})

// Função para obter dados do req utilizando bodyParser, cujo
//  objetivo é interpretar os dados que chegam no req

// Os ':' é algo significativo, transformando o id em uma variável
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

// Use -> É utilizado para qualquer requisição
// Protocolo HTTP é baseado em requisição e resposta
// Com esse simples exemplo, já estamos enviando ao front uma
//  resposta
// É possível utilizar ou não o primeiro parâmetro que é uma URL,
//  sem a URL todas as páginas executarão a função
// app.use('/bem', (req, res) => {
// Get -> Funcioná somente para requisições GET
app.get('/bem', (req, res, next) => {
// All -> Vai ser executado com qualquer verbo do protocolo HTTP
// app.all('/bem', (req, res) => {
    // res.send('Estou <b>bem</b>!')
    // res.json({
    //     name: 'iPad 32G',
    //     price: 1899,
    //     discount: 0.12
    // })
    // res.json([
    //     {id: 7, nome: 'Ana', position: 1},
    //     {id: 34, nome: 'Bia', position: 2},
    //     {id: 73, nome: 'Carlos', position: 3}
    // ])
    console.log('Durante')
    res.json({
        data: [
            {id: 7, nome: 'Ana', position: 1},
            {id: 34, nome: 'Bia', position: 2},
            {id: 73, nome: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})
// Existe uma Chamada OPTION que retorna os métodos disponíveis para
//  determinada URL, conhecida como Preflight, pré voo

// Função Middleware - Caso colocado após a função GET, essa função
//  não será chamada, pois a função GET será chamada primeiro.
//  Portanto a ordem faz diferença
// app.use('/bem', (req, res) => {
//     console.log('Será que serei chamado?')
// })
app.use('/bem', (req, res) => {
    // console.log('Será que serei chamado?')
    console.log('Depois')
})

// Com isso temos o express sendo executado na porta 3000
app.listen(3000, () => {
    console.log("Backend executando...")
})
