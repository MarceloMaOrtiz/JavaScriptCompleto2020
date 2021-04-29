// npm i lodash -> baixou a biblioteca aonde o terminal estava, criando o node_modules
// é comum utilizar o _ para importar a biblioteca, e será procurado pelo lodash seguinte uma
// ordem específica, e quando encontrar a pasta lodash, o node procura pelo arquivo index.js
// index.js possui module.exports = (./lodash)
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 2000)

// sudo npm install i -g nodemon
// foi baixado o nodemon que permite executar o código node.js utilizando-o. E com isso é possível
// restartar uma aplicação somente alterando-a e salvando novamente