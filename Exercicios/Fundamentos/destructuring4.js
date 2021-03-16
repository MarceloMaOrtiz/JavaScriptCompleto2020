function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // Substitui o Max e o Min caso min seja mais que max
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([300]))
console.log(rand([, 50]))
console.log(rand([]))
// console.log(rand()) // Error
