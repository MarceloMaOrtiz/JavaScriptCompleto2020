function Aula(nome, videoID){ // Função construtora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, aula2)

// Simula operado New
function novo(f, ...params) { // ... Operador Spread (Múltiplos argumentos ou elementos e Rest (Múltiplos argumentos na forma de array) 
    const obj = {} // Instancia um objeto - Padrão
    obj.__proto__ = f.prototype // Associou ao __proto__ do objeto o prototype da função f
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)