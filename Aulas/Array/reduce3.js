Array.prototype.meuReduce = function(callback, valorInicial){
    // Funciona, mas foi implementado um menor
    // let acumulador
    // if (!valorInicial){
    //     acumulador = this[0]
    //     for (let i = 1; i < this.length; i++)
    //         acumulador = callback(acumulador, this[i], i, this)
    // }else{
    //     acumulador = valorInicial
    //     for (let i = 0; i < this.length; i++)
    //         acumulador = callback(acumulador, this[i], i, this)
    // }
    // return acumulador

    inicioFor = valorInicial ? 0 : 1
    acumulador = valorInicial ? valorInicial : this[0]
    for (let i = inicioFor; i < this.length; i++)
        acumulador = callback (acumulador, this[i], i, this)
    return acumulador
}

const alunos = [
    { aluno: 'João', nota: 7.3, bolsista: false},
    { aluno: 'Maria', nota: 9.2, bolsista: true},
    { aluno: 'Pedro', nota: 9.8, bolsista: false},
    { aluno: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).meuReduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)