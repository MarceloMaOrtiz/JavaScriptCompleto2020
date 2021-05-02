// Não é possível utilizar await fora de uma função Async

// código auxiliar, copiado do arquivo promise2.js
// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...')) 
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...')) // Dessa forma ele só executado após ter recebido o resolve da segunda função
//     // .then(console.log('Executando promise 2...')) // Dessa forma ele imprime direto, independente da segunda chamada
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve() // Chama o then
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// Ideia de desenvolver um código Asyncrono, parecido com um Syncrono
// Com o await, o programa espera a finalização de determinada tarefa antes de continuar na próxima linha
async function executar() {
    let valor = await retornarValor() // É possível esperar por determinada resposta para posteriormente continuar a execu

    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(4000)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// Quando tiver saindo do mundo Asyncrono para o Syncrono é necessário acessar o valor a partir do then()
// Pois o then() só será chamado quando a função Async for de fato encerrada
executar().then(console.log)

async function retornarValorRapido() {
    return 20
}

async function executaRapido() {
    let valor = await retornarValorRapido() // Quando utilizado o await, automaticamente ficará esperando pelo valor
    let funcao = retornarValorRapido() // Desse forma o que é impresso a o tipo da função
    
    console.log(`Valor: ${valor}\t\t\tFunção: ${funcao}`)
}

executaRapido()