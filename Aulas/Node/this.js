console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // Dentro da função o this aponta para global

    this.perigo = '...' // Tomar cuidado com isso, pois estaremos inserindo informações dentro da variável global
}

this.perigo = '...' // Nesse momento está sendo inserido no module.exports

logThis()