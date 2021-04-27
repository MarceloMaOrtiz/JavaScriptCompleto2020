console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// INTERESSANTE -> reverse não existe na String, mas existe no Array, então estamos tranformando em array, utilizando split,
// utilizando reverse no array (existe), em seguida join para transformar de volta em String
String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // Jamais sobreescrever um método tão instrínsico da linguagem
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())