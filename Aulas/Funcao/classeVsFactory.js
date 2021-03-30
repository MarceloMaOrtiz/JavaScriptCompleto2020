// No browser o this pode pegar Window, por exemplo quando utiliza a seguinte função
// document.getElementsByTagName('body')[0].onclick = p1.falar
// IIFE para ajudar solucionar
// Utilizar no BackEnd
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`) // Sem o this daria erro, pois não estaria difinido
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Utilizar no FrontEnd
// Da forma que ta sendo desenvolvida, não há mais acesso para alterar o nome
const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()
