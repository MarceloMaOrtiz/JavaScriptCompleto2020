// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.
//     Exemplos:
//         repetir("código", 2) // retornará ["código", "código"]
//         repetir(7, 3) // retornará [7, 7, 7]

const repetir = function(elemento, quantidade){
    const resultado = new Array
    for (let i = 0; i < quantidade; i++)
        resultado.push(elemento)
    return resultado
}


console.log(repetir('código', 2))
console.log(repetir(7, 3))