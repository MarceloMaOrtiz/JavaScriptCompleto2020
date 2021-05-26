// Precisa ser feita algumas configurações no node para utilizar esse tipo de import. Após
// configurar o webpack, e utilizá-lo já foi possível utilizar esse tipo de import
import Pessoa from './pessoa.js'

// import utilizando o commonJS, funciona normalmente
// const Pessoa = require('./pessoa.js')

import './modulos/moduloA'

// Inicialmente houve um error ao executar o webpack, pois não foi utilizado um loader correto
// Esse import foi comentado no momento que foi acrescentado o '.sass', pois tanto o .css e o .sass dentro
// do assets, utilização um 'index.js' para referência-los
// import './assets/css/estilo.css'
import './assets'

const atendente = new Pessoa()

console.log(atendente.cumprimentar())