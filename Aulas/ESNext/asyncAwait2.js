
// Função auxiliar, copiada do arquivo promise3.js
// function gerarNumerosEntre(min, max) {
//     if (min > max)
//         [max, min] = [min, max]
    
//     return new Promise(resolve => {
//         const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
//         resolve(aleatorio)
//     })
// }

// Exemplo que está mostrando como utilizar o reject
function gerarNumerosEntre(min, max, numerosRepetidos) {
    if (min > max)
        [max, min] = [min, max]
    
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if (numerosRepetidos.includes(aleatorio))
            reject('Numero Repetido')
        else
            resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 5, [1, 2, 3])
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))

// Uma função Async sempre retornará uma promessa, portanto é aconselhavel ter um throw, além do return
async function gerarMegaSena(qtdNumeros, tentativas = 1){
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) { // Uma forma de iterar uma n vezes, de acordo com tamanho de qtdNumeros
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros // Retornando o valor, é resolvido a promisse
    } catch (err){
        // A forma de rejeitar um promise dentro de uma função assync é lançando um throw
        if (tentativas > 10)
            throw "Não deu certo!!"
        else
            return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))
    