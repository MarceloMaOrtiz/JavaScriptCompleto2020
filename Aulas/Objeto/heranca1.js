const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volto = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // Undefined
console.log(ferrari.__proto__) // Acessa quem é o prototype -> Pai -- Atributo __proto__ novo ES2015
console.log(ferrari.__proto__ === Object.prototype)
console.log(volto.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Último da cadeia do protótipo, por isso aponta pro null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)