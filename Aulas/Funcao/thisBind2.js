function Pessoa_Wrong(){
    this.idade = 0

    // A cada quantidade de tempo (ms), algo acontece, nesse caso uma função é chamada
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

// O setInterval não está utilizando o this como o objeto, pois quem está disparando a função é a função setInterval
new Pessoa_Wrong

function Pessoa_Bind(){
    this.idade = 0

    // A cada quantidade de tempo (ms), algo acontece, nesse caso uma função é chamada
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

// O setInterval está utilizando o this como o objeto, pois foi utilizado o bind para amarrar o this do objeto a função setInterval
new Pessoa_Bind

// Outra solução é setar uma variável com o this para ser utilizado onde desajarmos
function Pessoa_Self(){
    this.idade = 0

    const self = this
    // A cada quantidade de tempo (ms), algo acontece, nesse caso uma função é chamada
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

// O setInterval está utilizando o this como o objeto, pois foi utilizado o bind para amarrar o this do objeto a função setInterval
new Pessoa_Self