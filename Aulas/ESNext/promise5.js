function funcionarOuNao(valor, chanceErro) { // chanceErro recebe valor entre 0 e 1 com a probabilidade de dar erro
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject(`Ocorreu um erro!`)
            } else {
                resolve(valor)
            }
        } catch (e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(
        console.log,
        // É possível utilizar um segundo parâmetro no then, que será uma função para tratamento de erro específico
        // O comportamente segue a ordem dos then(), portanto mesmo com o reject, quando encontrado um tratamento específico,
        // É executado o tratamento específico, e quando um erro é tratado, o catch não capta mais esse erro
        err => console.log(`Tratamento específico de erro! Erro: ${err}`)
    )
    // O erro é captado em qualquer lugar, inclusive se ocorrer dentro de um then()
    .catch(err => console.log(`Erro: ${err}`)) // Não é possível encadear o catch
    .then(console.log('Fim!'))