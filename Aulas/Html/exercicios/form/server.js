const express = require('express')
const app = express() // Instanciando um objeto express
// body-parser auxilia durante a submissão dos dados, fazendo um parse
// no corpo do request, permitindo acessar os dados através de request.body
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('', (req, resp) => {
    resp.send('Todos estamos Felizes.')
})

app.get('/usuarios', (req, resp) => {
    // console.log(req.body) // Dados encapsulados com method POST
    console.log(req.query) // Dados presentes na URL
    resp.send('<h1>Parabéns, usuário recebido via GET!!!</h1>')
})

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário incluído via POST!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário alterado via POST!!!</h1>')
})

app.listen(8008)