function gerarNumerosEntre(min, max, tempo = 2000) {
    if (min > max)
        [max, min] = [min, max]
    
    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// A ideia é chamar o then() somente quando todas as promises finalizarem
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise') // Temporizador que utiliza a String como Label
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })