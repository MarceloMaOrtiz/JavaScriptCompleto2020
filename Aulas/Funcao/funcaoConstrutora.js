function Carro(velocidadeMaxima = 200, delta = 5){ // Delta é a aceleração
    let velocidadeAtual = 0 // atributo privado. Dica: Usar o this para deixar público

    this.acelerar = function(){ // Método público
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro // ou new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)