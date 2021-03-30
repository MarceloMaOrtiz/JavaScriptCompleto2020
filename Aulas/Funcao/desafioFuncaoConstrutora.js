function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`) // Sem o this daria erro, pois não estaria difinido
    }
}

const p1 = new Pessoa('João')
p1.falar()