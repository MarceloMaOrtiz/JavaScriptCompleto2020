// Recurso novo do JavaScript. Significa promessa. É utilizado para processamento assincrono
// Os caminhos mais naturais são a promise ser atendida ou rejeitada

function falarDepoisDe(segundos, frase) {
    // Resolve é um parâmetro que representa uma função que será chamada quando a função por atendida
    // Reject é um parâmetro que representa uma função que será chamada quando a função por rejeitada
    // Esses nomes podem ser alterados, mas é mais comum nas promises
    return new Promise((resolve, reject) => { // recebe uma função, callback.
        setTimeout(() => {
            // resolve(frase) // resolve só aceita um parâmetro
            reject(frase) // reject só aceita um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    // Caso executarmos uma promisse ou um reject sem then ou sem catch. Teremos um erro.
    // then é uma função da Promise, que é chamada quando o resolve é executado passando o objeto desejado
    // Portanto, quando o resolve é executado, a frase é passada para o then
    // Ou seja, quando executado o resolve, todos os then são executados
    .then(frase => frase.concat('?!?')) 
    .then(outraFrase => console.log(outraFrase))
    // catch é uma função da Promise, que é chamada quando o reject é executado passando o objeto desejado
    // Portanto, quando o reject é executado, a frase é passada para o catch
    // Ou seja, quando executado o reject, somente um catch é executado
    // .catch(e => e.concat('!?!?!')) // Só é possível executar um catch para cada promisse criada
    .catch(e => console.log(e))