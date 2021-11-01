// Dessa forma já está executando a função
const app = require('express')()

// Consign coloca todas as funções, métodos dentro do app
const consign = require('consign')

// Retorna um objeto com o knex configurado
const db = require('./config/db')

// Instancia dentro do app um novo obj, referente as configs do knex
app.db = db

consign()
    // Dessa forma está sendo injetado as dependências na aplicação
    .then('./config/middlewares.js')
    // Dessa forma é lido todos os arquivos dentro de api, em config
    //  está sendo feito um controle maior de quais módulos serão utilizados
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})