// ES-6

// ES:8 Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    // Anteriomente
    ola: function(){
        return 'Ola Gente!'
    },
    // Atual
    xau() {
        return 'Xau Gente!'
    }
}

console.log(pessoa.ola(), pessoa.nome, pessoa.xau())

// Class e herança-> Internamente é convertido para uma função
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())