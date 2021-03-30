let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) // Tomar cuidado com mudanças na variável global sem intenção
comparaComThis(this)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


// Função arrow mais previsivel
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports) // é o Modulo Corrente - Similar ao this

comparaComThisArrow = comparaComThisArrow.bind(global)

comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)
comparaComThisArrow(module.exports)