// Melhorias ES-2015

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // Não é mais necessário
const obj2 = {a, b, c} // Automaticamente para o nome campo é utilizado o nome da constante
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Suporta após atualização
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){ // Melhoria
        // ...
    }
}

console.log(obj5)