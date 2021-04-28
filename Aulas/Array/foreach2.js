
Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const array = ['um', 'dois', 'tres']

array.meuForEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
