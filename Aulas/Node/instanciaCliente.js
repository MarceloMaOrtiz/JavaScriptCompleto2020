// Pela instanciaUnica exportar um módulo normal, por padrão é feita a cache, portanto, ao incrementá-lo para o
// contadorA, o contadorB tb é alterado, pois ambos utilizam a mesma referência
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Pela instanciaNova temos a exportação feita com o conceito de Function Factory, portanto sempre gerará um novo objeto,
// tendo assim referências diferentes, e a cache descartada. Ao final o valor do contadorC será diferente do contadorD
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)