
//callback hell -> Exemplo de como era feito antigamente, quando não existia Promises
setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')

        }, 2000)
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh') // Chama o then
        }, tempo)
    })
}

let p = esperarPor(4000)

p
    .then(() => esperarPor(3000))
    .then(() => esperarPor())
    .then(texto => console.log(texto))