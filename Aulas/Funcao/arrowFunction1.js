let dobro = function (a){
    return 2*a
}

// Funções Arros são anônimas, então é necessário armazaná-la em uma variável para chamá-la
dobro = (a) => {
    return 2*a
}

// Retorno implícito
dobro = a => 2*a

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro

console.log(ola())