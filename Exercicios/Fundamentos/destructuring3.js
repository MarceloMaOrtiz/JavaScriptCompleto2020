// Significa que será passado um obj para a função, e dentro da função será possível 
// acessar os valores de mim e max diretamente
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Arredonda para baixo
}

const obj = { max: 50, min: 40 }

console.log(rand(obj))
console.log(rand({ max: 50, min: 40 }))
console.log(rand({ min: 40 }))
console.log(rand({}))
// console.log(rand()) // Error