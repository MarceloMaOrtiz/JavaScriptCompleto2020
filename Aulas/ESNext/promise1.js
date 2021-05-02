let a = 1
console.log(a) // Temos o valor na hora -> Sync

// Estamos prevendo que no futuro haverá algum dado, promessa -> Async
// PADRÃO: 
// Recebe a primeira função como parâmetro -> resolve -> Nome comum utilizado no lugar do cumprirPromessa
// Recebe a segunda função como parâmetro -> reject
let p = new Promise(function(cumprirPromessa) { 
    cumprirPromessa({
        x: 3,
        y: 4
    }) // Obrigatoriamente a promessa só aceita um único valor, é possível passar vários dados como objeto
})

console.log(typeof p)

// Também recebe uma função como parâmetro, e o valor que é passado pra função é exatamente o mesmo
// que é passado na cumprirPromessa
// Necessário ressaltar que o resultado de um método then é passado para o próximo método then
p
    .then(function(valor) { // Portanto valor ta recebendo o 3 enviado no cumprir promessa
        console.log(valor)
        return valor
    })
    .then(valor => {
        console.log(valor.x * 4)
        return valor   
    })
    .then(valor => valor.y + 2)
    .then(valor => console.log(valor))
    .catch(e => console.log(e))
