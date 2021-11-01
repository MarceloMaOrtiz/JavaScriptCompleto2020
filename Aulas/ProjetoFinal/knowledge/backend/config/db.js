const config = require('../knexfile.js')

// Instancia o knex já enviando como parâmetro um arquivo de config
//  para o knex
const knex = require('knex')(config)

// Para rodar os migrate automaticamente quando a aplicação é iniciada
// Tomar cuidado com essa abordagem
knex.migrate.latest([config])

module.exports = knex