// IIFE -> Immediately Invoked Function Expression
// Foge do escopo global, tudo que é definido dentro do parêntese existe localmente
// Sintaxe. Sem o primeiro parântese não é possível utilizar ela como IIFE, utilizando os utlimos parênteses
(function(){
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente')
})()