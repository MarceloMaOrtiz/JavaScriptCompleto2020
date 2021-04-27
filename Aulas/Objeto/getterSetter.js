const sequencia = {
    _valor: 1, // Convenção -> Mostrando para os desenvolvedores que deve ser utilizada somente dentro do objeto
    get valor(){
        return this._valor++
    },
    set valor(valor){
        this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia._valor, sequencia._valor)