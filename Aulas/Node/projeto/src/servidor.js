const porta = 3003 // Porta é um processo único dentro do computador - Porta 80 é a padrão

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
// Uma função middleware - Use faz com que qualquer requisição, independente da URL passe por esse middleware
// Estamos utilizando o x-www-form-urlencoded no Postman para enviar os dados
app.use(bodyParser.urlencoded({ extended: true})) // O que o extended faz?

const bancoDeDados = require('./bancoDeDados')

// Função feita para testar o conceito de middleware
// app.get('/produtos', (req, res, next) => { // Segue o padrão Middleware
//     console.log('Middleware 1...')
//     next() // Se removermos o next() não é passada para a próxima função e o servidor fica esperando infinitamente por uma resposta
// })

// app.use((req, res, next) => { 
app.get('/produtos', (req, res, next) => { // Segue o padrão Middleware
    // res.send({ nome: 'Notebook', preco: 123.45 }) // É convertido automaticamente para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Dentro de params temos os dados passados pela URL
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // no body, temos as informações enviadas via Post presentes no body
        preco: req.body.preco
    })
    res.send(produto) // É convertido automaticamente para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ // Como da match no id, a informação é alterada
        id: req.params.id,
        nome: req.body.nome, // no body, temos as informações enviadas via Post presentes no body
        preco: req.body.preco
    })
    res.send(produto) // É convertido automaticamente para JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // É convertido automaticamente para JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})